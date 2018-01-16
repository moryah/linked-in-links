import React from 'react';

class FormEditLink extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookmark: this.props.linkData.bookmark,
      link: this.props.linkData.link,
      tags: this.props.linkData.tags
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
    this.handleLink = this.handleLink.bind(this);
    this.handleTag = this.handleTag.bind(this);
    this.addTag = this.addTag.bind(this);
    this.delTag = this.delTag.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editLink({
      link: this.state.link,
      bookmark: this.state.bookmark,
      tags: this.state.tags
    },
      this.props.id
    ); 
  }

  handleBookmark(event){
    this.setState({ bookmark: event.target.value });
  }

  handleLink(event){
    this.setState({ link: event.target.value });
  }

  handleTag(event){
    this.setState({newTag: event.target.value});
  }

  addTag(event){
    this.setState({tagsAdded: this.state.tags.push(this.state.newTag)});
  }

  delTag(event){
    this.setState({tagsDeleted: this.state.tags.splice(event.target.id, 1)});
  }

  render() {
    const TAG_ITEMS = this.state.tags.map((tag, index) =>
      <i key = {index} >
      {tag}
      <input type="button" id={index} value="-" onClick={this.delTag} />
      </i>
    );

    return (
      <form onSubmit={this.handleSubmit}>
      Bookmark: 
      <input type="text" name="bookmark" value={this.state.bookmark} onChange={this.handleBookmark} />
      <br />
      Link: 
      <input type="text" name="link" value={this.state.link} onChange={this.handleLink} />
      <br />
      Tags: <input type="text" name="tag" onChange={this.handleTag} />
      <input type="button" value="+tag" onClick={this.addTag} />

      {TAG_ITEMS}

      <br />
      <input type="submit" value="edit" />
      <input type="button" value="back" onClick={() => this.props.editFormStatus(false)} />
      <br />
      <br />
      </form>
    )
  }
}

export default FormEditLink
