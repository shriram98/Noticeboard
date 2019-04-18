import React from 'react'

class SearchBox extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            //onChange will call a function called searchChange defined in CardList
            <div className='pa2'>
                <input onChange={this.props.searchChange} className='pa3 ba b--black bg-lightest-blue' type ='search' placeholder='search categories' />
            </div>
        );
    }
}
export default SearchBox 