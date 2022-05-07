import { Component } from "react";

class useEffectClass extends Component{
    intervalo=''
    componentDidMount(){
        this.intervalo= setInterval(() => {
            console.log(this.props.contador)
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalo)
    }
    render(){
        return(
            <p>
                Intervalor
            </p>
        )
    }
}
 export default useEffectClass;