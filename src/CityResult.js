import React from 'react';



class CityResult extends React.Component{
    render(){
        let elems =[];
        elems=this.props.zipcodes.map((elem,index) => {
        return(<div>
            <label key = {index}>{elem}</label>

        </div>)
    });


    return(
        <div className = "cityRes">
            {elems}

        </div>
    )
}


}

export default CityResult;