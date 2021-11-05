import React from "react";
import "./planty.css";
import PlantImage from '../../assets/plantImage.svg';
// import * as tf from '@tensorflow/tfjs';
import DisData from './Diseasename'
import {  useState } from "react";

// let data = require('./class_indices.json').then( console.log('data loaded')).catch(console.log("data not loaded")); 


export function DiseaseIdentifier() {
    async function Predict() { let img = document.querySelector('.leaf-image')
    if(img) { console.log('image found'); 
} else { console.log('image not found') } 
let offset = tf.scalar(255); 
let tensorImg = tf.browser.fromPixels(img).resizeNearestNeighbor([224,224]).toFloat().expandDims(); 
let tensorImg_scaled = tensorImg.div(offset); 
let model = await tf.loadLayersModel(require('../tensorflowjs-model/model.json')).then( console.log('model loaded') ); 
console.log(data)
    let prediction = await model.predict(tensorImg_scaled).data(); 
    var predicted_class = tf.argMax(prediction); 
    var class_idx = Array.from(predicted_class.dataSync())[0] ;
    console.log(data[class_idx]); 
    console.log(prediction[class_idx]); }
    
    const [num, setnum] = useState(38);
    const Varnum = () => {
        console.log("works");
        setnum(Math.floor(Math.random() * 36));
        console.log(num);
    }
    const [model, setModel] = useState();
    const [data, setData] = useState();
    let status;
    async function loadData() {
        try{
            // let data = await require('./class_indices.json');
            setData(data);
            console.log('Data is loaded');
            console.log(data);
        }
        catch(err){
            console.log(err); 
            console.log('Data not loaded');
        }
    }

    useEffect ( () => {
        tf.ready()
        .then( ()=> {
            loadData();
        });
    }, []);

    async function InitializeModel() {
        try {
            status = 'Doctor is working hard to find the disease';
            
            status = 'Doctor has identified the following disease';
            setModel(model);
            console.log(model)
        }
        catch(err){
            console.log(err); 
            console.log("model not initialized");
        }
    }

    useEffect( () => {
        tf.ready()
        .then(()=> {
            InitializeModel();
        });
    },[]);
  
    async function Predict() {
        let img = document.querySelector('.leaf-image')
        if(img) {
            console.log(
                'image found'
            )
        } else {
            console.log('image not found')
        }

        let offset = tf.scalar(255);

        let tensorImg = tf.browser.fromPixels(img).resizeNearestNeighbor([224,224]).toFloat().expandDims();

        let tensoringImg_scaled = tensorImg.div(offset);
        let model = await tf.loadLayersModel(require('../tensorflowjs-model/model.json')).then( console. log('yes')) ;
        let prediction = await model.predict(tensoringImg_scaled).data().then( console.log("yesss"));

        loadData().then(data => {
            var predicted_class = tf.argMax(prediction)
            var class_idx = Array.from(predicted_class.dataSync())[0];

            console.log(data[class_idx]);
            console.log(prediction[class_idx]);
        })
    }
    Predict();

        return (
            <section id="doctor" className="disease-identifier-section">
                <div className="disease-image-container">
                    <div className="upload-button-box">
                    <div className="disease-image-box">
                        <img className="leaf-image" src={PlantImage} alt="Plantdiseaseimage" />
//                         containe the uploaded image
                    </div>
                        <button className="upload-button">Choose Image of crop leaf</button>
                       <input type="file" name="uploadImage" id="uploadImage" onChange = { e=> { 
                            // let uploadImage = e.target.value;
                            Predict().then(
                            console.log('inside predict') ) 
                        }}
                        />
                        <input type="file" name="uploadImage" id="uploadImage" onChange ={Varnum }  />
                    </div>
                </div>
                <div className="disease-result-container">
                    <div className="init-status">
                        <p className="disease">
                            <span className="disease-name">
                                {/* name of the disease is showen here  */} Disease:
                            </span>
                            <span className="disease-name">
                                {DisData[num]}
                            </span>
                        </p>
                    </div>
                    <div className="disease-accuracy">
                        <div className="progress" id="progress">
                            <div className="inner">

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
