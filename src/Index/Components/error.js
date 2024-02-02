import React, { useState, useRef } from 'react';
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  convertToPixelCrop,
} from 'react-image-crop';
import { canvasPreview } from './canvasPreview';
import { useDebounceEffect } from './useDebounceEffect';
import 'react-image-crop/dist/ReactCrop.css';

function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight
  );
}

export default function App() {
  const [imgSrc, setImgSrc] = useState('');
  const previewCanvasRef = useRef(null);
  const imgRef = useRef(null);
  const hiddenAnchorRef = useRef(null);
  const blobUrlRef = useRef('');
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState(16 / 9);

  function onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(null); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setImgSrc(reader.result ? reader.result.toString() : '')
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  async function onDownloadCropClick() {
    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error('Crop canvas does not exist');
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY
    );
    const ctx = offscreen.getContext('2d');
    if (!ctx) {
      throw new Error('No 2d context');
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height
    );

    const blob = await offscreen.convertToBlob({
      type: 'image/png',
    });

    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
    }
    blobUrlRef.current = URL.createObjectURL(blob);
    hiddenAnchorRef.current.href = blobUrlRef.current;
    hiddenAnchorRef.current.click();
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined);
    } else {
      setAspect(16 / 9);

      if (imgRef.current) {
        const { width, height } = imgRef.current;
        const newCrop = centerAspectCrop(width, height, 16 / 9);
        setCrop(newCrop);
        setCompletedCrop(convertToPixelCrop(newCrop, width, height));
      }
    }
  }

  return (
    <div className="App">
      <div className="Crop-Controls">
        <input type="file" accept="image/*" onChange={onSelectFile} />
        <div>
          <label htmlFor="scale-input">Scale: </label>
          <input
            id="scale-input"
            type="number"
            step="0.1"
            value={scale}
            disabled={!imgSrc}
            onChange={(e) => setScale(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="rotate-input">Rotate: </label>
          <input
            id="rotate-input"
            type="number"
            value={rotate}
            disabled={!imgSrc}
            onChange={(e) =>
              setRotate(Math.min(180, Math.max(-180, Number(e.target.value)))
            )}
          />
        </div>
        <div>
          <button onClick={handleToggleAspectClick}>
            Toggle aspect {aspect ? 'off' : 'on'}
          </button>
        </div>
      </div>
      {!!imgSrc && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspect}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={imgSrc}
            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
      {!!completedCrop && (
        <>
          <div>
            <canvas
              ref={previewCanvasRef}
              style={{
                border: '1px solid black',
                objectFit: 'contain',
                width: completedCrop.width,
                height: completedCrop.height,
              }}
            />
          </div>
          <div>
            <button onClick={onDownloadCropClick}>Download Crop</button>
            <a
              href="#hidden"
              ref={hiddenAnchorRef}
              download
              style={{
                position: 'absolute',
                top: '-200vh',
                visibility: 'hidden',
              }}
            >
              Hidden download
            </a>
          </div>
        </>
      )}
    </div>
  );
}









// 
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


{completedCrop && (
    <>
      {/* <h2>for</h2> */}
      <img
        alt="Cropped Image"
        src={croppedImageUrl}
      /></>
  )}

  {completedCrop && (
    <button onClick={saveCroppedImage}>Save Cropped Image</button>
  )}




// 

<Row>
<Col xl={12}>

{src && (
        <>
          {/* <ReactCrop
            src={src}
            crop={crop}
            onImageLoaded={onImageLoaded}
            onComplete={onCropComplete}
            onChange={onCropChange}
          aspect={16 / 9}
          >
            <img className='img-fluid ' src={src} onLoad={() => console.log('Image Loaded')}></img>
          </ReactCrop> */}
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
<Col xs={12}>
{completedCrop && (
        <>
          {/* <h2>for</h2> */}
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






















// import React, { useState, useEffect } from 'react';
// import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';
// import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

// const Hrpost = () => {
//   const [post, setPost] = useState({
//     role: '',
//     location: '',
//     experience: '',
//     jobtype: 'Select Job Type',
//     description: '',
//     photo: null,
//   });


//   const [src,selectFile]=useState(null)
//   const [crop,setCrop]=useState(16/9)
//   const [image,setImage]=useState(null)



//   useEffect(() => {
//     console.log(post); // Access the updated post state here
//     console.log(src); // Access the updated post state here
//   }, [post,src]);
//   const handlechange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'photo') {
//       selectFile(URL.createObjectURL(files[0]))
      
//       setPost({
//         ...post,
//         [name]: files[0],
//          // Use the selected file
//       });
//     } else {
//       setPost({
//         ...post,
//         [name]: value,
//       });
//     }
//     console.log(post);
//     console.log(src);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('role', post.role);
//       formData.append('location', post.location);
//       formData.append('experience', post.experience);
//       formData.append('jobtype', post.jobtype);
//       formData.append('description', post.description);
//       formData.append('photo', post.photo);
//       const currentDate = new Date();
//       formData.append('time', currentDate.toISOString());
//       const response = await fetch('/addpost', {
//         method: 'POST',
//         body: formData,
//       });
//       if (response.status === 201) {
//         console.log('Data inserted successfully.');
//         // setPost({
//         //   role: '',
//         //   location: '',
//         //   experience: '',
//         //   jobtype: '',
//         //   description: '',
//         //   photo: null,
//         // });
//       } else {
//         console.error('Data insertion failed.');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   };
//   return (
//     <section className="h-100 bg-white-50">
//       <Container className="py-5 h-100">
//         <Row className="d-flex justify-content-center align-items-center h-100">
//           <Col>
//             <Card className="card-registration my-0">
//               <Row className="g-0">
//                 <Col xl={6} className="">
//                 {/* <Col xl={6} className="d-none d-xl-block"> */}
//                   {/* <Card.Img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
//                     alt="Sample photo"
//                     className="img-fluid"
//                     style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem', height: '85vh', objectFit: 'cover' }}
//                   /> */}
//                   <Row className=''>
//                     <Col xs>
//                     {src &&(
//                       <>
//                       <ReactCrop  onImageLoaded={setImage} crop={crop} onChange={setCrop} aspect={16/9}>
//                       <img src={src} className='img-fluid'></img>
//                       </ReactCrop>
//                       </>
//                     )

//                     }
                    
//                     </Col>
//                     <Col xs className='bg-secondary'>
//                       <h3>kejf</h3>
//                     </Col>
//                   </Row>
//                   {/* <Row className='bg-secondary'>
//                     <Col></Col>
//                   </Row> */}
//                 </Col>
//                 <Col xl={6}>
//                   <Form onSubmit={handleSubmit}>
//                     <Card.Body className="p-md-5 text-black">
//                       <h3 className="mb-3 text-uppercase">Job Post</h3>
//                       <Row>
//                         <Col md={6} className="mb-3">
//                           <Form.Group className="mb-3">
//                             <Form.Control type="text" name='role'
//                               value={post.role} onChange={handlechange}
//                               required
//                               className="form-control-lg border-secondary " />
//                             <Form.Label htmlFor="form3Example1m">Role</Form.Label>
//                           </Form.Group>
//                         </Col>
//                         <Col md={6} className="mb-3">
//                           <Form.Group className="mb-3">
//                             <Form.Control type="text" name='location'
//                               value={post.location} onChange={handlechange}
//                               required
//                               className="form-control-lg border-secondary " />
//                             <Form.Label htmlFor="form3Example1n">Location</Form.Label>
//                           </Form.Group>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col md={6} className="mb-3">
//                           <Form.Group className="mb-3">
//                             <Form.Control type="number" name='experience'
//                               value={post.experience} onChange={handlechange}
//                               required
//                               className="form-control-lg border-secondary " />
//                             <Form.Label htmlFor="form3Example1m1">Experience</Form.Label>
//                           </Form.Group>
//                         </Col>
//                         <Col md={6} className="mb-3 py-1">
//                           <Form.Select name='jobtype' className="form-control-lg border-secondary select py-2" accordion="true"
//                             onChange={handlechange}
//                             required
//                           >
//                             <option disabled>{post.jobtype}</option>
//                             <option value="Full Time">Full Time</option>
//                             <option value="Part Time">Part Time</option>
//                             <option value="On Site">On Site</option>
//                             <option value="Hybrid">Hybrid</option>
//                           </Form.Select>
//                         </Col>
//                       </Row>
//                       <Form.Group className="mb-3">
//                         <Form.Control type="text" name='description'
//                           value={post.description} onChange={handlechange}
//                           required
//                           className="form-control-lg border-secondary " />
//                         <Form.Label htmlFor="form3Example8">Job Description</Form.Label>
//                       </Form.Group>
//                       <Row>
//                         <Col md={7} className="mb-3">
//                           <Form.Group className="mb-3">
//                             <Form.Control type="file" name='photo'
//                               // value="select photo"
//                               onChange={handlechange}
//                               required
//                               className="py-2 form-control border-secondary " />
//                             <Form.Label htmlFor="form3Example1m">Photo</Form.Label>
//                           </Form.Group>
//                         </Col>
//                         <Col md={5} className="mb-3 justify-content-end">
//                           <Button variant="warning" size="lg" type='submit'>
//                             Submit form
//                           </Button>
//                         </Col>
//                       </Row>
//                     </Card.Body>
//                   </Form>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Hrpost;
