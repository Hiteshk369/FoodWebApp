import React ,{useState} from 'react'
import { motion } from 'framer-motion';
import {MdFastfood , MdCloudUpload , MdDelete} from 'react-icons/md'
import {BiRupee} from 'react-icons/bi'
import { categories } from '../utils/categories';
import Loader from './Loader';
import {storage} from '../firebase.config';
import {getDownloadURL, ref, uploadBytesResumable , deleteObject} from 'firebase/storage'
import { getFoodItems, saveItem } from '../utils/FirebaseFunctions';
import {useDispatch} from 'react-redux';

const CreateContainer = () => {

  const [title,setTitle] = useState('');
  const [category,setCategory] = useState(null);
  const [price,setPrice] = useState('');
  const [isloading,setisLoading] = useState(false);
  const [imageAsset,setImageAsset] = useState(null);
  const [vegOrnon , setvegOrnon] = useState('');
  const [fields,setFields] = useState(false);
  const [alertStatus,setAlertStatus] = useState('');
  const [msg,setMsg] = useState('');

  const dispatch = useDispatch();

  const uploadImage = (e) => {
      setisLoading(true);
      const imageFile = e.target.files[0];
      const storageRef = ref(storage , `Images/${Date.now()}-${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef , imageFile);

      uploadTask.on('state_changed',
          (snapshot) => {
             const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
             console.log('Upload is ' + uploadProgress + '% done');
          },
          (error) => {
            console.log(error);
            setFields(true);
            setMsg('Error while uploading : Try Again');
            setAlertStatus('danger');
            setTimeout(() => {
              setFields(false);
              setisLoading(false);
            },4000);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImageAsset(downloadURL);
              setisLoading(false);
              setFields(true);
              setMsg('Image Uploaded successfully');
              setAlertStatus('success');
              setTimeout(() => {
                setFields(false);
              },4000);
            })
          }
        );
  };

  const deleteImage = () => {
    setisLoading(true);
    const desertRef = ref(storage , imageAsset);
    deleteObject(desertRef).then(()=>{
      setImageAsset('');
      setFields(true);
      setMsg('Image deleted successfully');
      setAlertStatus('success');
      setTimeout(() => {
        setFields(false);
        setisLoading(false);
      },4000)
    }).catch((error) => {
      console.log(error);
      setFields(true);
      setMsg('Error while deleting : Try Again');
      setAlertStatus('danger');
    })
  };

  const saveDetails = () => {

      setisLoading(true)
      try{
        if( !title || !category || !price || !imageAsset || !vegOrnon){
          setFields(true);
          setMsg('All field are required');
          setAlertStatus('danger');
          setTimeout(()=>{
            setFields(false);
            setisLoading(false);
          },4000);
  
        }else{
          const data = {
            id : `${Date.now()}`,
            title : title,
            category : category,
            vegnonveg : vegOrnon,
            imageUrl : imageAsset,
            price : price,
            qty : 1
          };
          saveItem(data);
          setisLoading(false);
          setFields(true);
          setMsg('Data saved successfully');
          setAlertStatus('success');
          clearData();
          setTimeout(()=>{
            setFields(false);
          },4000)
          fetchItems();                    
        }
      }catch(error) {
        setFields(true);
        setMsg('Error while saving dish : Try Again');
        setAlertStatus('danger');
        setTimeout(() => {
          setFields(false);
          setisLoading(false);
        },4000);
      }   
  };

  const fetchItems = async() => {
    await getFoodItems().then((data)=>{
      dispatch({
        type : 'SET_FOOD_ITEMS',
        foodItems : data
      });
    });
  };

  const clearData = () => {
    setTitle('');
    setImageAsset(null);
    setPrice('');
    setvegOrnon('');
    setCategory('Select Category');
  }

  return (
    <section className='mt-28 w-full h-auto flex flex-col items-center justify-center '>

        <div className=' w-[60%] p-3 px-10 flex flex-col bg-slate-100 gap-3 border rounded-lg items-center justify-center border-gray-300'>
          {
            fields && (
              <motion.p 
              initial = {{opacity : 0 }}
              animate = {{opacity : 1}}
              exit = {{opacity : 0}}
              className={`w-full flex items-center justify-center p-2 ${alertStatus === 'danger' ? 'bg-red-500' : 'bg-emerald-500' }  rounded-lg font-poppins font-semibold text-white`}>
                {msg}
              </motion.p>
            )
          }

         <div className='w-full flex border-b border-gray-300 items-center '>
          <MdFastfood className = 'text-gray-700' />
          <input className='p-2 w-full rounded-lg outline-none font-poppins bg-transparent text-base text-lightColor'
           type="text"
           value={title}
           placeholder='Enter the name of the dish' required
           onChange={(e)=>setTitle(e.target.value)} />
         </div>

         <select onChange={(e)=>setCategory(e.target.value)} className = 'w-full p-2 rounded-lg font-poppins text-lightColor outline-none' required>
          <option defaultValue='true' value='other' className='invisible'>Select Category</option>
          {
            categories && categories.map((item) => (
              <option className = 'text-red bg-white font-poppins border-0 outline-none capitalize' key={item.id}
              value={item.urlParamName}>{item.title}</option>
            ))
          }
         </select>

        <div className='w-full flex items-center '>
            <div className='bg-emerald-500 rounded-lg p-2 mr-5 cursor-pointer'>
              <input  type="radio" id="veg" name="vegnveg" value="veg" onChange={(e)=>setvegOrnon(e.target.value)}></input>
              <label className='font-poppins text-white pl-1' htmlFor="veg">Veg</label><br></br>
            </div>
            <div className='bg-red-500 rounded-lg p-2 cursor-pointer'>
              <input type="radio" id="non-veg" name="vegnveg" value="Non-Veg" onChange={(e)=>setvegOrnon(e.target.value)}></input>
              <label className='font-poppins text-white pl-1' htmlFor="non-veg">Non-Veg</label><br></br>
            </div>
        </div>

        <div className = 'group flex flex-col items-center justify-center border-2 w-full h-225 border-dotted border-gray-300 rounded-lg cursor-pointer'>
          {
            isloading ? <Loader /> : 
            <>
              {
                !imageAsset ? 
                <>
                <label className = 'h-full w-full flex flex-col justify-center items-center cursor-pointer'>
                    <div className = 'h-full w-full flex flex-col justify-center items-center gap-2'>
                        <MdCloudUpload className='text-gray-500 hover:text-gray-700 text-3xl' />
                        <p className = 'text-gray-500 hover:text-gray-700'>Click here to upload</p>
                    </div>
                    <input type="file" name='uploadimage' accept='image/*' className = 'w-0 h-0' onChange={uploadImage}  />
                </label>
                </> : 
                <>
                  <div className = 'relative h-full'>
                    <img src={imageAsset} alt="uploaded" className ='w-full h-full object-cover p-2 ' required />
                    <button className = 'absolute top-1 right-1 cursor-pointer p-2 bg-red-500 rounded-full' onClick={deleteImage}><MdDelete className='text-white' size='20px' /></button>
                  </div>
                </>
              }
            </>
          }
        </div>

        <div className='w-full flex border-b border-gray-300 items-center '>
          <BiRupee size='22px' className = 'text-gray-700' />
          <input className='p-2 w-full rounded-lg outline-none font-poppins bg-transparent text-base text-lightColor'
           type="number" min = '0'
           value={price}
           placeholder='Price of the dish' required
           onChange={(e)=>setPrice(e.target.value)} />
         </div>

         <div className='w-full flex items-center'>
          <button type='button' onClick = {saveDetails} className = 'w-full bg-emerald-500 p-2 rounded-lg text-white font-semibold font-poppins border-none outline-none'>
            Save
          </button>
         </div>

      </div>

    </section> 
  )
}

export default CreateContainer