import React, {Component} from "react";
import {genres, tags as tagsList} from "data";

class FilmForm extends Component {
  state = {
    tags: [],
    genre: "",
    sel: "",
    multipleSelect: [],
  };

  handleTagsChange = ({target}) => {
    const checkedId = Number(target.id);

    this.setState(state => ({
      tags: state.tags.includes(checkedId)
        ? state.tags.filter(t => t !== checkedId)
        : [...state.tags, checkedId],
    }));
  };

  handleGenreChange = title => {
    this.setState({genre: title});
  };

  handleSelectChange = ({target}) => {
    this.setState({sel: target.value});
  };

  handleMultiSelect = ({target}) => {
    const selectedOptions = [...target.selectedOptions].map(o => o.value);
    this.setState({multipleSelect: selectedOptions});
  };

  render() {
    const {tags, genre, sel, multipleSelect} = this.state;
    return (
      <form className="ui form">
        <div className="ui grid">
          <div className="four wide column">
            <select
              value={multipleSelect}
              onChange={this.handleMultiSelect}
              multiple
              size={genres.length}
            >
              {genres.map(g => (
                <option key={g._id} value={g.title}>
                  {g.title}
                </option>
              ))}
            </select>
          </div>

          <div className="four wide column">
            <select
              value={sel}
              onChange={this.handleSelectChange}
              className="ui dropdown"
            >
              {genres.map(g => (
                <option key={g._id} value={g.title}>
                  {g.title}
                </option>
              ))}
            </select>
          </div>

          <div className="four wide column">
            <div className="grouped fields">
              <label>Genres</label>
              {genres.map(g => (
                <div key={g._id} className="field">
                  <div className="ui radio checkbox">
                    <input
                      onChange={e => this.handleGenreChange(g.title)}
                      type="radio"
                      name={g.title}
                      checked={genre === g.title}
                    />
                    <label>{g.title}</label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="four wide column">
            <div className="grouped fields">
              <label>Tags</label>
              {tagsList.map(tag => (
                <div key={tag._id} className="field">
                  <div className="ui checkbox">
                    <input
                      onChange={this.handleTagsChange}
                      type="checkbox"
                      checked={tags.includes(tag._id)}
                      id={tag._id}
                    />
                    <label htmlFor={tag._id}>{tag.title}</label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ====================================================== */}
      </form>
    );
  }
}

export default FilmForm;
