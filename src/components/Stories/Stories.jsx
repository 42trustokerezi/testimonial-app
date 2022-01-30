import React, {useState} from 'react';
import storage from '../../firebase'
import { GlobalStyle, 
        StyledFormWrapper, 
        StyledForm, 
        StyledInput, 
        StyledFieldset,
        StyledTextArea,
        StyledError,
        StyledButton
    } from "./Styles"

function Stories() {

    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)  
    console.log(imageAsFile)

    const [state, setState] = useState("");
    const [error, setError] = useState('');

    const handleImageAsFile = (e) =>{
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    const handleFireBaseUpload = (e) =>{
        e.preventDefault()
        console.log('start of upload')
        if(imageAsFile === ''){
          console.log(`not an image, the image file is a ${typeof(imageAsFile)}`)
        }
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
      
        uploadTask.on('state_changed',
          (snapShot) => {
            console.log(snapShot)
          }, (err) => {
            console.log(err)
          }, () => {
            storage.ref('images').child(imageAsFile.name).getDownloadURL()
              .then(fireBaseUrl => {
                setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
              })
        
          }
        )
      }
      

const handleSubmit = ()=>{
    
}
const handleInput = ()=>{

}

  return (
      <>
      <GlobalStyle />
        <StyledFormWrapper>
            <StyledForm onSubmit={handleFireBaseUpload}>
            <h2>Share your amazing story!</h2>
            <label htmlFor="image">Upload your picture</label>
            <StyledInput
                type="file"
                name="image"
                placeholder="Choose Image"
                value={state.image}
                onChange={handleImageAsFile}
            />
            <label htmlFor="firstName">First Name</label>
            <StyledInput
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={handleInput}
            />
            <label htmlFor="lastName">Last Name</label>
            <StyledInput
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={handleInput}
            />
            <label htmlFor="message">Share your story</label>
            <StyledTextArea
                name="story"
                value={state.story}
                onChange={handleInput}
            />
            <StyledFieldset>
                <legend>What did you interact with Vasiti as?</legend>
                <label>
                <input
                    type="radio"
                    value="customer"
                    name="referral"
                    checked={state.referral === 'customer'}
                    onChange={handleInput}
                />
                Customer
                </label>
                <label>
                <input
                    type="radio"
                    value="vendor"
                    name="referral"
                    checked={state.gender === 'vendor'}
                    onChange={handleInput}
                />
                Vendor
                </label>
            </StyledFieldset>
            {error && (
                <StyledError>
                <p>{error}</p>
                </StyledError>
            )}
            <StyledButton type="submit">Share your story</StyledButton>
            </StyledForm>
        </StyledFormWrapper>
      </>
  );
}

export default Stories;
