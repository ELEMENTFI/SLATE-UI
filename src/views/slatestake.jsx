/* global AlgoSigner */

import React, { Component, useState, useEffect, useRef } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Button, Dropdown, Card, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Row, Table } from "reactstrap";
import web3 from "../web3";

import Popup from "../Popup";
import Modald from "../ModalD";
import FolowStepsd from "../FolowStepsd";
import BigNumber from "bignumber.js";
import FolowStepsdcopy from "../FolowStepsdcopy";
const algosdk = require('algosdk');

const Slatestake = () => {
    let [activeTab, setActiveTab] = useState("Deposit");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const[stakeenddate,setStakeendDate]=useState('');
    var[datestake,setDatestake]=useState([]);
    var [time2, settime2]=useState("");
    var [date1, setdate1]=useState("");
    var [time1, settime1]=useState("");
    const[ap1,setAP] = useState("");
    const [discal ,setdistance]=useState("");
    const [lock1 ,setlock1]=useState("");
    const[stakelock,setStakeLock]=useState("");
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
    const toggle1 = () => setDropdownOpen1(!dropdownOpen1);
    let history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpens, setIsOpens] = useState(false);
    var[dis,setDis] = useState("");






    useEffect(() => {
        const fetchPosts = async () => {
            var  currentdate=(new Date().getTime())/1000;
            var enddatediff = 1670436722-currentdate;
            if(enddatediff>0){
                setStakeendDate(1);
        
            }
            else{
                setStakeendDate(0);
                console.log("enddate",stakeenddate);
            }
        
        };
        
    
        fetchPosts();
      }, []);
    const[balance,setBalance] = useState([]);
    const[stakedbalance,setStakedBalance] = useState([]);
    const[rewardamountbalance,setrewardBalance] = useState([]);
    let assetid = 49116941;
    let id = 49098300;
    let key='"MjI="';
    let address=localStorage.getItem("wallet");
    useEffect(() => {
        const fetchPosts = async () => {
            const accts = await AlgoSigner.accounts({
                ledger: 'TestNet'
              });
              const r = await AlgoSigner.indexer({
                ledger: 'TestNet',
                //path: `/v2​/assets​/${assetid}​/balances​`
                path: `/v2/accounts/${localStorage.getItem("wallet")}`
              });
              const tx = await client.accountInformation(localStorage.getItem("wallet"));
              console.log("accountinfo",tx);
              console.log("value",r);
              let assetcheck= r.account['assets'];
              if(assetcheck=== null||assetcheck===undefined){
              alert("assetcheckalert");
              }else{

              
              //console.log("newasset",assetcheck.length);
             for(let i=0;i<assetcheck.length;i++){
               let assetidget = r.account['assets'][i]['asset-id'];
               if(assetidget === assetid ){
                  setBalance(r.account['assets'][i]['amount']);
                  console.log("stakedbalancecheck",r['account']['apps-local-state']);
               }
               }
                let rewardcheck=r.account['apps-local-state'];
                if(rewardcheck=== null||rewardcheck===undefined){
                  alert("rewardcheckalert");
                }else{
                  console.log("check",rewardcheck.length);
                  for(let i=0;i<rewardcheck.length;i++){
                    let rewardidget = r.account['apps-local-state'][i]['id'];
                   // console.log("rewardidget",rewardidget);
                   if(rewardidget === id ){
                        console.log("checked",rewardidget);
                        let checkrewardkey = r.account['apps-local-state'][i]['key-value'];
                        console.log("checkrewardj",checkrewardkey.length)
                        for(let j=0;j<checkrewardkey.length;j++){
                         let rewardkey = r.account['apps-local-state'][i]['key-value'][j];
                         //console.log("rewardkey",rewardkey.key);
                         if(rewardkey['key'] === "MjI="){
                             console.log("checked1");
                             console.log("rewardbalancecheck",r['account']['apps-local-state'][i]['key-value'][j]['value']['uint']);
                             setrewardBalance(r['account']['apps-local-state'][i]['key-value'][j]['value']['uint']);
                             console.log("checked2");
                             }
                             else if(rewardkey['key'] === "MjA="){
                               console.log("checked3");
                               console.log("stakedbalancecheck",r['account']['apps-local-state'][i]['key-value'][j]['value']['uint']);
                               setStakedBalance(r['account']['apps-local-state'][i]['key-value'][j]['value']['uint']);
                               console.log("checked4");
                             }
                        }
                         
                       
                     
                 }
                
            }
                }
            

          }
              
        };
    
        fetchPosts();
      },[]);
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[stakeamount,setstakedamount] = useState("");
    const[unstakeamount,setunstakedamount] = useState("");
    const [accounts, setaccount] = useState("");
    


// user declared algod connection parameters
//purestake api used
let algodServer = "https://testnet-algorand.api.purestake.io/ps2";
let algodToken = {
    'X-API-Key': '9oXsQDRlZ97z9mTNNd7JFaVMwhCaBlID2SXUOJWl'
   };

let algodPort = "";
let client = new algosdk.Algodv2(algodToken, algodServer, algodPort);
//optinpart
const optin = () => {
    global.TextEncoder = require("util").TextEncoder; 
  const algosdk = require('algosdk');
  
  
  // user declared algod connection parameters
  //purestake api used
  let algodServer = "https://testnet-algorand.api.purestake.io/ps2";
  let algodToken = {
      'X-API-Key': '9oXsQDRlZ97z9mTNNd7JFaVMwhCaBlID2SXUOJWl'
     };
  
  let algodPort = "";
  
  
  
  // helper function to await transaction confirmation
  // Function used to wait for a tx confirmation
  const waitForConfirmation = async function (algodclient, txId) {
      let status = (await algodclient.status().do());
      let lastRound = status["last-round"];
        while (true) {
          const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
          if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
            //Got the completed Transaction
            console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
            break;
          }
          lastRound++;
          await algodclient.statusAfterBlock(lastRound).do();
        }
      };
  
  // optIn
  async function optInApp(client, account, index1,index2) {
      // define sender
      let sender = localStorage.getItem("wallet");
      console.log("sender complete", sender);
      let txID;
      // get node suggested parameters
      let params = await client.getTransactionParams().do();
      // comment out the next two lines to use suggested fee
      params.fee = 1000;
      params.flatFee = true;
  
      // create unsigned transaction
      let transaction1 = algosdk.makeApplicationOptInTxn(sender, params, index1);
  
     //Atomic Optin
     let transaction2 = algosdk.makeApplicationOptInTxn(sender, params, index2);
    
    let txns = [transaction1, transaction2];
    let txgroup = algosdk.assignGroupID(txns);
    console.log("group = ", txgroup);
  
      let txn_b64_1 = transaction1.toByte();
      let txn_b64_2 = transaction2.toByte();
  
      //let signTx = [];
  
      // let signArr = AlgoSigner.signTxn([{txn: txn_b64_1}, {txn: txn_b64_2}]);
      let signArr = [txn_b64_1, txn_b64_2];
      let base64Txs = signArr.map((binary) => AlgoSigner.encoding.msgpackToBase64(binary));
  console.log("line 1318");
      let signedTxs = await AlgoSigner.signTxn([
        {
          txn: base64Txs[0],
        },
        {
          txn: base64Txs[1],
        },
      ]);
    console.log("sign complete");
      let binarySignedTxs = signedTxs.map((tx) => AlgoSigner.encoding.base64ToMsgpack(tx.blob));
      let trans = await client.sendRawTransaction(binarySignedTxs).do();
      console.log("Send complete");
      console.log("txID", trans);
      console.log("id", trans.txId);
     await waitForConfirmation(client, trans.txId);
    
  }  
  async function main() {
      try {
      // initialize an algodClient
      let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
      let account=localStorage.getItem("wallet");
      
      // create new application
      //let appId = await createApp(algodClient, creatorAccount, approvalProgram, clearProgram, localInts, localBytes, globalInts, globalBytes);
      let appId1 = 49099237;
      let appId2 = 49098300;
      // opt-in to application
      await optInApp(algodClient, account, appId1,appId2);
     
      }
      catch (err){
          console.log("err", err);  
      }
  }
  
  main();
  }
//assetoptinpart
const assetoptin = async () => {
    let opt_sender = localStorage.getItem("wallet");
    client.getTransactionParams().do()
.then((d) => {
  let txParamsJS = d;
  const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
    from: opt_sender,
    to: opt_sender,
    assetIndex: 49116941,
    note: undefined,
    amount: 0,
    suggestedParams: {...txParamsJS}
  });
  
  // Use the AlgoSigner encoding library to make the transactions base64
  const txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
  
  AlgoSigner.signTxn([{txn: txn_b64}]) 
  .then((d) => {
    let signedTxs = d;
    AlgoSigner.send({
        ledger: 'TestNet',
        tx: signedTxs[0].blob
      })
      .then((d) => {
        let tx = d;
        console.log("Optin Success with txID = ",tx);
        AlgoSigner.algod({
            ledger: 'TestNet',
            path: '/v2/transactions/pending/' + tx.txId
          })
          .then((d) => {
            console.log(d);
          })
          .catch((e) => {
            console.error(e);
          });
      })
      .catch((e) => {
        console.error(e);
      });
  })
  .catch((e) => {
    console.error(e);
  });
})
.catch((e) => {
  console.error(e);
});
}
 
 
 //stakingpartstart
const stake = async() => {

  
    var amt = document.getElementById("tid1").value; 
    let stakeamount = parseInt(amt) * 1000000;
    global.TextEncoder = require("util").TextEncoder; 
    const algosdk = require('algosdk');
    setaccount(localStorage.getItem("wallet"));
    let sender = localStorage.getItem("wallet");
    
    // user declared algod connection parameters
    //purestake api used
    let algodServer = "https://testnet-algorand.api.purestake.io/ps2";
    let algodToken = {
        'X-API-Key': '9oXsQDRlZ97z9mTNNd7JFaVMwhCaBlID2SXUOJWl'
       };
    
    let algodPort = "";
    let assetid = 49116941;
    
    
    // helper function to await transaction confirmation
    // Function used to wait for a tx confirmation
    const waitForConfirmation = async function (algodclient, txId) {
        let status = (await algodclient.status().do());
        let lastRound = status["last-round"];
          while (true) {
            const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
            if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
              //Got the completed Transaction
              console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
              break;
            }
            lastRound++;
            await algodclient.statusAfterBlock(lastRound).do();
          }
        };
    
    
    
    async function callApp(account, index1, index2,amount) {
      // define sender
      
      let sender = account;
      let client = new algosdk.Algodv2(algodToken, algodServer, algodPort);
    // get node suggested parameters
      let params = await client.getTransactionParams().do();
      // comment out the next two lines to use suggested fee
      params.fee = 1000;
      params.flatFee = true;
    
      let appArgs1= [];
      
      appArgs1.push(new Uint8Array(Buffer.from("always")));
      console.log("(line:516) appArgs = ",appArgs1)
    
      // create unsigned transaction
      let transaction1 = algosdk.makeApplicationNoOpTxn(sender, params, index1, appArgs1)
      //  let txId1 = transaction1.txID().toString();
    
      let appArgs2= [];
      
      appArgs2.push(new Uint8Array(Buffer.from("10")));
      console.log("(line:516) appArgs = ",appArgs2)
    
      // create unsigned transaction
      let transaction2 = algosdk.makeApplicationNoOpTxn(sender, params, index2, appArgs2)
      // // Sign the transaction
      // let signedTxn = txn.signTxn(account.sk);
      // console.log("Signed transaction with txID: %s", txId);
    
      let transaction3 =algosdk.makeAssetTransferTxnWithSuggestedParams(sender,"WJGZYFRGIQSR2SUR5RZGJKCENKB74TDE2DJ2KIYWW23DXV742VJYP2SIFM", undefined,undefined,amount,undefined,assetid,params);
      
      let txns = [transaction1, transaction2,transaction3];
      let txgroup = algosdk.assignGroupID(txns);
      console.log("group = ", txgroup);
    
        let txn_b64_1 = transaction1.toByte();
        let txn_b64_2 = transaction2.toByte();
        let txn_b64_3 = transaction3.toByte();
    
        //let signTx = [];
    
        // let signArr = AlgoSigner.signTxn([{txn: txn_b64_1}, {txn: txn_b64_2}]);
        let signArr = [txn_b64_1, txn_b64_2,txn_b64_3];
        let base64Txs = signArr.map((binary) => AlgoSigner.encoding.msgpackToBase64(binary));
    console.log("line 1318");
        let signedTxs = await AlgoSigner.signTxn([
          {
            txn: base64Txs[0],
          },
          {
            txn: base64Txs[1],
          },
          {
            txn: base64Txs[2],
          },
        ]);
      console.log("sign complete");
        let binarySignedTxs = signedTxs.map((tx) => AlgoSigner.encoding.base64ToMsgpack(tx.blob));
        let trans = await client.sendRawTransaction(binarySignedTxs).do();
        console.log("Send complete");
        console.log("txID", trans);
        console.log("id", trans.txId);
       await waitForConfirmation(client, trans.txId);
    }

    
    async function main() {
        try {
        // initialize an algodClient
        let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
        let appId1 = 49099237;
        let appId2 = 49098300;
    let account=localStorage.getItem("wallet");
    let amount =stakeamount;
    await callApp(account, appId1,appId2,amount);
    
        }
        catch (err){
            console.log("err", err);  
        }
    }
   
    main();

   

}    
   
  

    return (
        <section className="p-0 my-5">
            {/* <div>
    {isOpen && <Popup
      content={<>
       <center> <b >{dis}</b><br/>
        <button onClick={togglePopup}>OK</button></center>
      </>}
      handleClose={togglePopup}
    />}
  </div>   */}
  <Modald visible={isOpen} onClose={() => setIsOpen(false)}>
        <FolowStepsd viewhistory={dis}  />
      </Modald>

      <Modald visible={isOpens} onClose={() => setIsOpens(false)}>
        <FolowStepsdcopy viewhistory={dis}  />
      </Modald>
             {
            localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "" || localStorage.getItem("wallet") === undefined?(<>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xl="8" lg="8" md="10" sm="12">
                        <Card className="custom-card">
                            <div className="p-3">
                                <h4>stake  cbUSD </h4>
                                <h6>The Stake cbUSD and get Black token as reward</h6>
                                <Table bordered responsive className="mt-3">
                                    <thead>
                                        <tr>
                                            <th>Your cbUSD</th>
                                            <th>Staked cbUSD</th>
                                            <th>Remaining Amount to Stake </th>
                                            <th>Black reward</th>
                                            <th>Your Black</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                        </tr>
                                    </tbody>
                                </Table>
                               
<div>
                                <Container fluid>
                                    <Row>
                                        <Col xl="6" md="12">
                                        {stakeenddate===1 ? (<> 
                                            <InputGroup className="mt-3">
                                                
                                            <Input placeholder={0} style={{ height: "auto" }}type = "number" id="tid1"  />
                                                <InputGroupAddon addonType="append"><Button color="site-primary" style={{ height: "auto" }}>stake</Button></InputGroupAddon>
                                            </InputGroup>
                                            <div className="percentage smaller">
                                                <div className="percentage-item" >25%</div>
                                                <div className="percentage-item" >50%</div>
                                                <div className="percentage-item">75%</div>
                                                <div className="percentage-item" >100%</div>
                                            </div>
                                        </>):(<> 
                                            <InputGroup className="mt-3">
                                                
                                                
                                                <InputGroupAddon addonType="append"><Button color="site-primary" >STAKING POOL IS ENDED</Button></InputGroupAddon>
                                            </InputGroup>

                                        </>)}
                                           
                                        </Col>
                                        <Col xl="6" md="12">
                                   
                                            <InputGroup className="mt-3">
                                                <Input placeholder={0} style={{ height: "auto" }}type = "number"  id="tid2"  />
                                                <InputGroupAddon addonType="append"><Button color="site-primary" >unstake</Button></InputGroupAddon>
                                            </InputGroup>
                                            <div className="percentage smaller">
                                                <div className="percentage-item">25%</div>
                                                <div className="percentage-item">50%</div>
                                                <div className="percentage-item">75%</div>
                                                <div className="percentage-item">100%</div>
                                            </div>
                                           
    
                                        </Col>
                                    </Row>
                                </Container>
                                <Container>
                                    <Row className="justify-content-center">
                                        <Col xl="9">
                                            <Row className="mt-4">
                                                <Col xl="6" md="12">
                                                    <Button color="outline-site-primary" block >claim reward</Button>
                                                </Col>
                                                <Col xl="6" md="12" className='mt-3 mt-xl-0'>
                                                    <Button color="outline-site-primary" block   >Exit</Button>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>
                                </Container>
                                </div>

                            </div>
                        </Card>
                    </Col>
                </Row>
 </Container>
        </>):
        <>
              <Container fluid>
                <Row className="justify-content-center">
                    <Col xl="8" lg="8" md="10" sm="12">
                        <Card className="custom-card">
                            <div className="p-3">
                                <h4>stake  slate </h4>
                                <h6>The Stake slate and get slate token as reward</h6>
                                <Table bordered responsive className="mt-3">
                                    <thead>
                                        <tr>
                                            <th>Your slate</th>
                                            <th>Staked slate</th>
                                            <th>Remaining Amount to Stake </th>
                                            <th>slate reward</th>
                                            <th>Your slate</th>
                                                
                                                
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>{balance/1000000}</td>
                                            <td>{stakedbalance/1000000}</td>
                                            <td>{}</td>
                                            <td>{}</td>
                                            <td>{}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div>         



<div>
                                <Container fluid>
                                    <Row>
                                        <Col xl="6" md="12">
                                       
                                             <div>

                                      <> 

                                        <InputGroup className="mt-3">
                                                <Input placeholder={stakeamount} style={{ height: "auto" }}type = "number" id="tid1"  />
                                                <InputGroupAddon addonType="append"><Button color="site-primary" onClick={stake}>stake</Button></InputGroupAddon>
                                            </InputGroup>
                                            <div className="percentage smaller">
                                                <div className="percentage-item" onClick={0}>25%</div>
                                                <div className="percentage-item" onClick={0}>50%</div>
                                                <div className="percentage-item" onClick={0}>75%</div>
                                                <div className="percentage-item" onClick={0}>100%</div>
                                            </div>
                                      </>
                                      
                                            
                                            </div>
                                             :
                                        </Col>
                                        <Col xl="6" md="12">
                                        <div>
           
              <div>
                                            <InputGroup className="mt-3">
                                                <Input placeholder={0} style={{ height: "auto" }}type = "number"  id="tid2"  />
                                                <InputGroupAddon addonType="append"><Button color="site-primary" >unstake</Button></InputGroupAddon>
                                            </InputGroup>
                                            <div className="percentage smaller">
                                                <div className="percentage-item"onClick={0}>25%</div>
                                                <div className="percentage-item"onClick={0}>50%</div>
                                                <div className="percentage-item"onClick={0}>75%</div>
                                                <div className="percentage-item"onClick={0}>100%</div>
                                            </div>
                                            </div>  
            

           
            
        </div>
    
                                        </Col>
                                    </Row>
                                </Container>
                                <Container>
                                    <Row className="justify-content-center">
                                        <Col xl="9">
                                            <Row className="mt-6">
                                                <Col xl="6" md="12" >
                                                    <Button color="outline-site-primary" >claim reward</Button>
                                                </Col>
                                                <Col xl="6" md="12" className='mt-3 mt-xl-0'>
                                                    <Button color="outline-site-primary" block   onClick={optin} >App Optin</Button>
                                                    <Button color="outline-site-primary" block  onClick={assetoptin} >Asset Optin</Button>
                                                   
                                                </Col>
                                                
                                            </Row>

                                        </Col>
                                    </Row>
                                </Container>
                                </div>



  </div> 
                            </div>
                        </Card>
                    </Col>
                </Row>
 </Container>
       
          </>
        }
       </section>
    );
}

export default Slatestake;