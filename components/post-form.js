import React from 'react'
import request from 'superagent'

class PostForm extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  render(){
    return(
      <div className='PostForm'>
        Title: <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange.bind(this)}/>
        Body: <input type="text" name="body" placeholder="Body" value={this.state.body} onChange={this.handleChange.bind(this)}/>
        <button type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }

  handleChange(e){
    let state = {}
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleSubmit(){
    request.post('http://localhost:3000/posts')
    .send({title: this.state.title, body: this.state.body})
    .set('Accept', 'application/json')
    .end(function(err, res){
      console.log(res)
    });
  }
}

export default PostForm
