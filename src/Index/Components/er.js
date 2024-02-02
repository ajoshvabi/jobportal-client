<Col xl={6} className='h-50 ' >
<Row>
  <Col className='bg-primary'>
    hai
  </Col>
</Row>
<Row>
  <Col className='bg-dark'>hello</Col>
</Row>
</Col>

import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
function App() {
    const [src, setSrc] = useState(null); // Image source
    const [crop, setCrop] = useState({ aspect: 1 }); // Crop configuration
    const [completedCrop, setCompletedCrop] = useState(null); // To capture the completed crop
    const [croppedImageUrl, setCroppedImageUrl] = useState(''); // To store the cropped image URL
  }
  return (
    <div>
      {/* Input for selecting an image */}
      <input type="file" accept="image/*" onChange={onSelectFile} />
  
      {/* Display the selected image */}
      {src && (
        <>
          <ReactCrop
            src={src}
            crop={crop}
            onImageLoaded={onImageLoaded}
            onComplete={onCropComplete}
            onChange={onCropChange}
          />
        </>
      )}
  
      {/* Display the cropped image */}
      {completedCrop && (
        <img
          alt="Cropped Image"
          src={croppedImageUrl}
        />
      )}
  
      {/* Button to save the cropped image */}
      {completedCrop && (
        <button onClick={saveCroppedImage}>Save Cropped Image</button>
      )}
    </div>
  );
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const onImageLoaded = (image) => {
    const width = 200; // Set your desired initial crop width
    const height = 200; // Set your desired initial crop height
    setCrop(makeAspectCrop({ x: 0, y: 0, aspect: width / height }, image.width, image.height));
  };const onCropComplete = (crop) => {
  setCompletedCrop(crop);
};

const onCropComplete = (crop) => {
    setCompletedCrop(crop);
  };
  const onCropChange = (newCrop) => {
    setCrop(newCrop);
  };
  const saveCroppedImage = () => {
    const image = new Image();
    image.src = src;
  
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    if (completedCrop.width && completedCrop.height) {
      canvas.width = completedCrop.width;
      canvas.height = completedCrop.height;
  
      ctx.drawImage(
        image,
        completedCrop.x,
        completedCrop.y,
        completedCrop.width,
        completedCrop.height,
        0,
        0,
        completedCrop.width,
        completedCrop.height
      );
  
      const croppedDataUrl = canvas.toDataURL('image/jpeg');
      setCroppedImageUrl(croppedDataUrl);
    }
  };
  return (
    <div className="App">
      { /* Your component content goes here */ }
    </div>
  );
  







  // working code 30/10

  import React, { useState, useEffect } from 'react';
import ReactCrop, { makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Hrpost = () => {
  const [post, setPost] = useState({
    role: '',
    location: '',
    experience: '',
    jobtype: 'Select Job Type',
    description: '',
    photo: null,
  });


  const [src, selectFile] = useState(null)
  const [crop, setCrop] = useState(16 / 9)
  const [image, setImage] = useState(null)
  const [completedCrop, setCompletedCrop] = useState(null); // To capture the completed crop
  const [croppedImageUrl, setCroppedImageUrl] = useState('');


  const onImageLoaded = (image) => {
    console.log('Image Loaded'); // Add this line to check if the function is called
    const crop = makeAspectCrop(
      {
        x: 0,
        y: 0,
      },
      image.width,
      image.height
    );
    setCrop(crop);
    setImage(image);
  };



  const onCropComplete = (crop) => {
    setCompletedCrop(crop);
  };
  const onCropChange = (newCrop) => {
    setCrop(newCrop);
  };
  const saveCroppedImage = () => {
    const image = new Image();
    image.src = src;
    console.log("haiii",src);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (completedCrop.width && completedCrop.height) {
      canvas.width = completedCrop.width;
      canvas.height = completedCrop.height;

      ctx.drawImage(
        image,
        completedCrop.x,
        completedCrop.y,
        completedCrop.width,
        completedCrop.height,
        0,
        0,
        completedCrop.width,
        completedCrop.height
      );

      const croppedDataUrl = canvas.toDataURL('image/jpeg');
      setCroppedImageUrl(croppedDataUrl);
      console.log("croppedDataUrl",croppedDataUrl);
    }
  };


  useEffect(() => {
    console.log(post); // Access the updated post state here
    console.log(src); // Access the updated post state here
  }, [post]);
  const handlechange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      selectFile(URL.createObjectURL(files[0]))

      setPost({
        ...post,
        [name]: files[0],
        // Use the selected file
      });
    } else {
      setPost({
        ...post,
        [name]: value,
      });
    }
    console.log(post);
    console.log(src);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('role', post.role);
      formData.append('location', post.location);
      formData.append('experience', post.experience);
      formData.append('jobtype', post.jobtype);
      formData.append('description', post.description);
      formData.append('photo', post.photo);
      const currentDate = new Date();
      formData.append('time', currentDate.toISOString());
      const response = await fetch('/addpost', {
        method: 'POST',
        body: formData,
      });
      if (response.status === 201) {
        console.log('Data inserted successfully.');
        // setPost({
        //   role: '',
        //   location: '',
        //   experience: '',
        //   jobtype: '',
        //   description: '',
        //   photo: null,
        // });
      } else {
        console.error('Data insertion failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
    <section className="h-100 bg-white-50">
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col>
            <Card className="card-registration my-0">
              <Row className="g-0">
                <Col xl={6}>
                  <Form onSubmit={handleSubmit}>
                    <Card.Body className="p-md-5 text-black">
                      <h3 className="mb-3 text-uppercase">Job Post</h3>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group className="mb-3">
                            <Form.Control type="text" name='role'
                              value={post.role} onChange={handlechange}
                              required
                              className="form-control-lg border-secondary " />
                            <Form.Label htmlFor="form3Example1m">Role</Form.Label>
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group className="mb-3">
                            <Form.Control type="text" name='location'
                              value={post.location} onChange={handlechange}
                              required
                              className="form-control-lg border-secondary " />
                            <Form.Label htmlFor="form3Example1n">Location</Form.Label>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group className="mb-3">
                            <Form.Control type="number" name='experience'
                              value={post.experience} onChange={handlechange}
                              required
                              className="form-control-lg border-secondary " />
                            <Form.Label htmlFor="form3Example1m1">Experience</Form.Label>
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3 py-1">
                          <Form.Select name='jobtype' className="form-control-lg border-secondary select py-2" accordion="true"
                            onChange={handlechange}
                            required
                          >
                            <option disabled>{post.jobtype}</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="On Site">On Site</option>
                            <option value="Hybrid">Hybrid</option>
                          </Form.Select>
                        </Col>
                      </Row>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" name='description'
                          value={post.description} onChange={handlechange}
                          required
                          className="form-control-lg border-secondary " />
                        <Form.Label htmlFor="form3Example8">Job Description</Form.Label>
                      </Form.Group>
                      <Row>
                        <Col md={7} className="mb-3">
                          <Form.Group className="mb-3">
                            <Form.Control type="file" name='photo'
                              // value="select photo"
                              onChange={handlechange}
                              required
                              className="py-2 form-control border-secondary " />
                            <Form.Label htmlFor="form3Example1m">Photo</Form.Label>
                          </Form.Group>
                        </Col>
                        <Col md={5} className="mb-3 justify-content-end">
                          <Button variant="warning" size="lg" type='submit'>
                            Submit form
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Form>
                </Col>
                <Col xl={6} className='h-50 ' >
                  <Row>
                    <Col className=''>
                      {src && (
                        <>
                          <ReactCrop
                            src={src}
                            crop={crop}
                            onImageLoaded={onImageLoaded}
                            onComplete={onCropComplete}
                            onChange={onCropChange}
                            aspect={16 / 9}
                          >
                            <img
                              src={src}
                              alt="Preview"
                              style={{ maxWidth: "100%", height: "auto" }}
                            />
                          </ReactCrop>

                        </>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col className=''>
                      {completedCrop && (
        <>
          <img
            alt="Cropped Image"
            src={croppedImageUrl}
          /></>
      )}

      {completedCrop && (
        <button onClick={saveCroppedImage}>Save Cropped Image</button>
      )}
                    </Col>
                  </Row>
                </Col>


              </Row>

            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hrpost;

  