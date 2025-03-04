import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

export default function Deposit() {
    let [dep, setDep] = useState(0);
    let [bal, setBal] = useState(0);
    let [product, setProducts] = useState([]);
    let [num,setNum]=useState(0)
    let [hide,setHide]=useState()

    useEffect(() => {
        async function axiosProd() {
            try {
                const response = await axios.get('http://localhost:8080/data');
                setProducts(response.data);
                if (response.data[num]) {
                    setBal(response.data[num].amount); // Set initial balance
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        axiosProd();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        let deposit = Number(dep);
        let updatedBalance = Number(bal) + deposit;
        setBal(updatedBalance);

        try {
            await axios.put(`http://localhost:8080/update/${product[num]._id}`, {
                amount: updatedBalance
            });
            alert("Updated successfully!");
        } catch (error) {
            console.error("Error updating:", error);
        }
    }

    function Changeuser(e) {
    if (e === "Choice the Acc") {
        setHide(" ");
    } else {
        const selectedIndex = product.findIndex(item => item.name === e);
        if (selectedIndex !== -1) {
            setNum(selectedIndex);
            setBal(product[selectedIndex].amount);
            setHide(
                <>
                    <h2 style={{marginLeft:"10%"}}>Balance: {product[selectedIndex].amount}</h2>
                    <label htmlFor="" style={{marginLeft:"10%"}}>Amount :</label><br />
                    <input type="number" onChange={(e) => setDep(e.target.value)} placeholder='RS: Amount' style={{marginLeft:"10%"}}/> <br /><br />
                    <Button type="submit"style={{marginLeft:"40%"}}>Submit</Button>
                </>
            );
        }
    }
}


    return (
        <>
            <div id='Trans' style={{marginLeft:"30%", marginTop:"10%",backgroundColor:"lightgray",width:"40%" ,borderRadius:"5%",}}>
                <h1 style={{color:"red" ,marginLeft:"30%"}}>Deposit</h1>
                <form onSubmit={handleSubmit}>
                <select onChange={(e) => Changeuser(e.target.value)} style={{marginLeft:"10%"}}>
                    <option value={"Choice the Acc"} >Choice the Acc</option>
                    {product.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))}
                </select><br /><br />
                    {hide}
                </form>
            </div>
        </>
    );
}