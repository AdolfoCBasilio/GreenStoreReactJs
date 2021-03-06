import { Component } from "react";

const style={
    layout:{
        background:'#fff',
        color:'#0A28E',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
    },
    container:{
        width:'700px',
    }
}

class Layout extends Component{
    render(){
        return(
            <div style={style.layout}>
                <div style={style.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Layout;