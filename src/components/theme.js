import React from "react";

function Theme() {

  var setTheme = (theme) => {
    document.documentElement.className = theme
  };
  
  return (
    <div className="btn-multi">
      <input type="checkbox" id="multi-btn" name="multi-btn" />
      <label htmlFor="multi-btn">
        <button
          type="button"
          className="btn btn-circle bg-info"
          onClick={()=>setTheme('th-blue')}
        >
          <i className="fa fa-circle-thin icon"></i>
        </button>
        <button
          type="button"
          className="btn btn-circle bg-success"
          onClick={()=>setTheme('th-green')}
        >
          <i className="fa fa-circle-thin icon"></i>
        </button>
        <button
          type="button"
          className="btn btn-circle bg-danger"
          onClick={()=>setTheme('th-red')}
        >
          <i className="fa fa-circle-thin icon"></i>
        </button>
        <span className="btn btn-circle" onClick={()=>setTheme('light')}>
          <i className="la la-close icon"></i>
        </span>
        <i className="la la-paint-brush icon"></i>
      </label>
    </div>
  );
}

export default Theme;
