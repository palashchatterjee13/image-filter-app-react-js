import React, { useState, useLayoutEffect } from 'react';
import './App.css';
import reactlogo from './react.png';
import Filter from './filters';

function App() {
  let [state, setState] = useState({
    source: `https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    w: window.innerWidth,
    saturation: 1,
    brightness: 1,
    sepia: 0,
    cs: 0,
    contrast: 1,
  });

  useLayoutEffect(() => {
    function updateSize() {
      setState({ ...state, w: window.innerWidth });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  let c = 0;
  let m = (window.innerWidth < 500) ? true : false;

  function onChangeSaturation(e) {
    let v = e.target.value;
    v = v / 100;
    setState({ ...state, saturation: v });
  }

  function onChangeBrightness(e) {
    let v = e.target.value;
    v = v / 100;
    setState({ ...state, brightness: v });
  }

  function onChangeSepia(e) {
    let v = e.target.value;
    v = v / 100;
    setState({ ...state, sepia: v });
  }

  function onChangeHue(e) {
    let v = e.target.value;
    v = v / 100 * 360;
    setState({ ...state, cs: v });
  }

  function onChangeContrast(e) {
    let v = e.target.value;
    v = v / 100;
    setState({ ...state, contrast: v });
  }

  function handleChange(e) {
    console.log(e.target.files);
    setState({ ...state, source: URL.createObjectURL(e.target.files[0]) })
  }

  function download() {
    var html = document.getElementById("BOX");
    var image = document.getElementById("image");
    var win = window.open('', '', 'left=0,top=0,toolbar=0,scrollbars=0,status=0');
    win.document.write('<style>@page { size: auto; margin: 0mm; } div#Filter { display: flex; position: fixed; top: 0; left: 0; width: 100%; height: 100%; align-items: center; justify-content: center; background: black; } img.image {     display: block;     width: 100%; }</style>'+html.innerHTML);
    win.document.close();
    win.focus();
    win.print();
    win.close();
  }

  return (
    <div className='App' onDragStart={() => { return false }}>
      <div className={(!m) ? 'page' : 'pageM'}>
        <div className='filterWrap'>
          <div>
            <div className='viewBox' id="BOX">
              <Filter brightness={state.brightness} contrast={state.contrast} saturate={state.saturation} sepia={state.sepia} hue-rotate={state.cs + 'deg'} child={<img className='image' id='image' src={state.source} />} />
            </div>
            <div className='viewBoxElement'>
              <label htmlFor='imageInput' className='ls'>
                Upload Picture
              </label>
              <div className='spacer' />
              <button onClick={download}>Save Picture</button>
            </div>
          </div>
        </div>
      </div>
      <div className={(!m) ? 'page' : 'pageM x'}>
        <div className='filterWrap'>
          <div className='viewBoxElement2'>
            <div>
              <input type='file' id='imageInput' onChange={handleChange} className='hidden' />
              <label htmlFor='saturation' className='form-label'>Saturation</label>
              <input type='range' className='form-range' id='saturation' value={state.saturation * 100} onChange={onChangeSaturation} ></input>
              <label htmlFor='brightness' className='form-label'>Brightness</label>
              <input type='range' className='form-range' id='brightness' value={state.brightness * 100} onChange={onChangeBrightness} ></input>
              <label htmlFor='hue' className='form-label'>Contrast</label>
              <input type='range' className='form-range' id='contrast' value={state.contrast * 100} onChange={onChangeContrast} ></input>
              <label htmlFor='sepia' className='form-label'>Sepia</label>
              <input type='range' className='form-range' id='sepia' value={state.sepia * 100} onChange={onChangeSepia} ></input>
              <label htmlFor='hue' className='form-label'>Hue</label>
              <input type='range' className='form-range' id='hue' value={state.cs / 360 * 100} onChange={onChangeHue} ></input>
            </div>
            <div className='reactJs'>Made with <img src={reactlogo} className='reactLogo' /></div>
            <br />
            {/* <canvas id="canvas"></canvas> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
