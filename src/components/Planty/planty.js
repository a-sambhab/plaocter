import React from "react";
import "./planty.css";
import PlantImage from '../../assets/plantImage.svg';
import { useEffect, useState } from "react";


export function DiseaseIdentifier() {
  
    const [model, setModel] = useState();
    const [data, setData] = useState();

    async function loadData() {
        try{
            let data = await require('./class_indices.json');
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
            let status = 'Doctor is working hard to find the disease';
            let model = await tf.loadLayersModel(require('../tensorflowjs-model/model.json'));
            status = 'Doctor has identified the following disease';
            setModel(model);
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

        let offset = tf.scaler(255);

        let tensorImg = tf.browser.fromPixels(img).resizeNearesrNeighbor([224,224]).toFloat().expandDims();

        let tensoringImg_scaled = tensorImg.div(offset);

        prediction = await model.predict(tensoringImg_scaled).data();

        loadData().then(data => {
            predicted_class = tf.argMax(prediction)
            class_idx = Array.from(predicted_class.dataSync())[0];

            console.log(data[class_idx]);
            console.log(prediction[class_idx]);
        })
    }
    Predict();

        return (
            <section className="disease-identifier-section">
                <div className="disease-image-container">
                    <div className="disease-image-box">
                        <img className="leaf-image" src={PlantImage} alt="Plant disease image" />
                        {/* containe the uploaded image */}
                    </div>
                    <div className="upload-button-box">
                        {/* <button className="upload-button">Choose Image of crop leaf</button> */}
                        <input type="file" name="uploadImage" id="uploadImage" />
                    </div>
                </div>
                <div className="disease-result-container">
                    <div className="init-status">
                        <p className="disease">
                            <span className="disease-name">
                                {/* name of the disease is showen here  */} Disease:
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
