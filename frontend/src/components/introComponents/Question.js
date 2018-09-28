import React, { Component } from 'react';
import styled from 'styled-components';
import  { Formik, Form, Field } from 'formik';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { econcat } from '../../redux/actions/econcat'
import { postFetchData , getFetch } from '../../functions/fetchFunctions'

class Question extends Component{


    state = {
        values:{
            salary:0,
            food:25,
            fun:25,
            cola:25,
            kurser:25},
        
    }

    async componentDidMount(){
        console.log(this.props.econCat)
        if(this.props.econCat.length != false){
            let values = {...this.props.econCat};
            console.log(values);
            let salary = values.salary;

            Object.keys(values).forEach((item)=>{
                if(item !== "salary"){
                    values[item]=values[item]/salary*100;
                }
                
            })
            
            this.setState({values})
            
        }else{
            let data = await getFetch(`econdata?id=${this.props.userData.uid}`);
            let values = {...data.data.settings};
            let salary = values.salary;
            
            Object.keys(values).forEach((item)=>{
                if(item !== "salary"){
                    values[item]=values[item]/salary*100;
                }
                
            })
            this.setState({values});
            this.props.econcat(data.data.settings);
        }
       
        
    }

    handleSubmit = (values) => {
        
        
        let sum = values.food+values.cola+values.kurser+values.fun;
        if(sum === 100 && values.salary>0){
            

            Object.keys(values).forEach((item)=>{
                if(item !== "salary"){
                    values[item]=values[item]/100*values.salary;
                }
                
            })

            let data = {values,_id:this.props.userData.uid}
            postFetchData("newEconData", data)
            this.props.handleSave();
            
        }else{
            console.log("FEL")
        }
        
    }


render(){
    return(
        <Wrapper>
            <Formik
            enableReinitialize={true}
            initialValues={{salary:this.state.values.salary,
                            food:this.state.values.food,
                            fun:this.state.values.fun,
                            cola:this.state.values.cola,
                            kurser:this.state.values.kurser

            }}
            onSubmit={(values)=>this.handleSubmit(values)}
            validate={values => {
                
                this.setState({values})
                let sum = values.food+values.cola+values.kurser+values.fun;
               
                    if(sum !== 100){
                        this.setState({errorDist:true})
                    }else{
                        this.setState({errorDist:false}) 
                    }
                    if(values.salary === ""){

                    }else if (values.salary < 1){
                        this.setState({errorZero:true})
                    }else{
                        this.setState({errorZero:false})
                    }
               
                
                
            }}
            
            >
                <StyledForm style={{}}>
                    <Salary>Enter your monthly salary</Salary>
                    <StyledField type="number" name="salary"/>
                    <Salary small>Enter your distribution of spending</Salary>
                    <Salary xs cat>Food</Salary>
                    <Flex><StyledFieldRange type="range" min="0" max="100" name="food"/><Label>{this.state.values.food/100*this.state.values.salary}</Label></Flex>
                    <Salary xs cat>Fun</Salary>
                    <Flex><StyledFieldRange type="range" min="0" max="100" name="fun" /><Label>{this.state.values.fun/100*this.state.values.salary}</Label></Flex>
                    <Salary xs cat>Drinks</Salary>
                    <Flex><StyledFieldRange type="range" min="0" max="100" name="cola"/><Label>{this.state.values.cola/100*this.state.values.salary}</Label></Flex>
                    <Salary xs cat>Education</Salary>
                    <Flex><StyledFieldRange type="range" min="0" max="100" name="kurser"/><Label>{this.state.values.kurser/100*this.state.values.salary}</Label></Flex>
                    {this.state.errorDist && <Salary  small red>Spending distriburion is not 100%</Salary>}
                    {this.state.errorZero && <Salary small  red>Your Salary cant be zero</Salary>}
                    <SaveButton type="submit" on={this.handleSubmit}>Spara</SaveButton>
                </StyledForm>
            </Formik>
            
            
        </Wrapper>
    );
}

}

function mapStateToProps(state){
    return { userData: state.login,
            econData: state.econData,
            econCat: state.econcat
    }
   }
   function mapDispatchToProps(dispatch) {
     return { 
       ...bindActionCreators({econcat}, dispatch)
      }
   }
  
   export default connect(mapStateToProps, mapDispatchToProps)(Question);

const StyledForm = styled(Form)`
height:100%;
display:flex;
width:100%;
flex-direction:column;


`;



const StyledField = styled(Field)`
border-radius: 5px;
width: 90%;
margin-top: 20px;
margin-bottom:40px;
align-self: center;
`;

const StyledFieldRange = styled(Field)`
/*width:70%;*/
min-width:250px;
margin-bottom: 15px;



`;

const Flex = styled.div`
display:flex;
align-self:center;
`;


const Wrapper = styled.div`
display:flex;
flex-direction: column;
flex:1;


`;

const SaveButton = styled.button`
background-color: #22A7F0;
color: white;
font-family:Raleway, sans-serif;
margin-bottom:22px;
margin-top:auto;
align-self: center;
font-size: 1.6rem;
border: 0;
height:2.5rem;
width: 90%;
border-radius:0.45rem;
:focus{
    outline:0
}
`;

const Label = styled.label`

margin-bottom:20px;
margin-left: 40px;
width: 28px;
color:#22A7F0;
font-family: Raleway, sans-serif;
font-size: 1rem;
`;

const Salary = styled.label`
margin-top: 5px;
margin-bottom: ${props => !props.cat && "15px"};
margin-bottom: ${props => props.cat && "0px"};
margin-bottom: ${props => (!props && !props.cat) && ("0px")};
margin-left: ${props => !props.cat && "16px"} ;
margin-left: ${props => props.cat && ("50px")} ;

color: ${props => !props.red && "lightgray"};
color: ${props => props.red && "red"};
font-family: Raleway, sans-serif;
font-size: ${props => !props && ("1.3rem")};
font-size: ${props => props.small && ("1.1rem")};
font-size: ${props => props.xs && ("0.8rem")};
align-self: ${props => props.red && "center"};

transition: all 0.2s;



`;

