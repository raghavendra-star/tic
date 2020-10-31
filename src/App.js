import React, { useState } from 'react';
import logo from './logo.svg';

import Icon from "./components/icon";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card,CardBody,Container,Button,Col,Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const itemArray=new Array(9).fill("empty");

const App= () => {
  const[isCross,setisCross]=useState(false)
  const[winmessage,setwinMessage]=useState("")

  const reloadGame =() =>{
    setisCross(false);
    setwinMessage("");
    itemArray.fill("empty",0,9);
  }

  const checKiskWinner =()=> {
    if(itemArray[0]===itemArray[1] &&
       itemArray[0]===itemArray[2] &&
       itemArray[0]!== "empty"
       ){
         setwinMessage(`${itemArray[0]}wins`);
       }else if (
        itemArray[3]!== "empty" &&
        itemArray[3]===itemArray[4] &&
        itemArray[3]===itemArray[5] 
       ){
         setwinMessage(`${itemArray[3]}wins`);
       }else if(
        itemArray[6]!== "empty" &&
        itemArray[6]===itemArray[7] &&
        itemArray[6]===itemArray[8] 
       ) {
        setwinMessage(`${itemArray[6]}wins`);
       } else if(
        itemArray[1]!== "empty" &&
        itemArray[1]===itemArray[4] &&
        itemArray[4]===itemArray[7] 

       ){
        setwinMessage(`${itemArray[1]}wins`);
       }else if(
        itemArray[2]!== "empty" &&
        itemArray[2]===itemArray[5] &&
        itemArray[5]===itemArray[8] 

       ){
        setwinMessage(`${itemArray[2]}wins`);
       } else if(
        itemArray[0]!== "empty" &&
        itemArray[0]===itemArray[3] &&
        itemArray[3]===itemArray[6]

       ){
        setwinMessage(`${itemArray[0]}wins`);
       } else if(
        itemArray[0]!== "empty" &&
        itemArray[0]===itemArray[4] &&
        itemArray[4]===itemArray[8]
       ){
        setwinMessage(`${itemArray[0]}wins`);
       }else if(
        itemArray[2]!== "empty" &&
        itemArray[2]===itemArray[4] &&
        itemArray[4]===itemArray[6]
       ){
        setwinMessage(`${itemArray[0]}wins`);
       }
    
  }

  const changeItem=itemNumber => {
    if(winmessage){
      return toast(winmessage,{type:"success"})
    }
    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber]=isCross ? "cross" : "circle"
      setisCross(!isCross)

    } else {
      return toast("already filled",{type:"error"})
    }

    checKiskWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"/>
        <Row>
          <Col md={6} className="offset-md-3">
            {winmessage ?(
              <div className="mb-2 mt-2">
                <h1 className="text-success text-uppercase text-center">
                  {winmessage}
                </h1>
                <Button  color="success" block onClick={reloadGame}>
                  Reload the game
                </Button>
              </div>
            ):(
              <h1 className="text-center text-warning">
                {isCross?"cross":"circle"} turns

              </h1>
            )}
            <div className="grid">
              {itemArray.map((item,index)=>(
                <Card  onClick={()=>changeItem(index)}>
                  <CardBody className="box">
                    <Icon name={item}/>
                  </CardBody>
                </Card>

              ))}

            </div>
          </Col>
        </Row>

      
    </Container>
  );
}

export default App;
