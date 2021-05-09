import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { savecontact } from '../../../api/Contact';
import { useDispatch, useSelector } from 'react-redux';
import FormData from 'form-data';
import { uploadContactAction } from '../../../store/Contacts/actions';


export function PhoneAdd(){
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const stateGlobal:any = useSelector(state => state);

    const onSubmit = (data:any) => {
       const formData = new FormData();
       let { name, phone, address, job, company, email } = data;

       let  fileInputElement:any = document.getElementById("fileOne");
    
       formData.append('name', name); 
       formData.append('phone', phone);
       formData.append('address', address);
       formData.append('job',job);
       formData.append('company', company);
       formData.append('email', email);
       formData.append('image', fileInputElement.files[0]);
       try{
        savecontact(formData);
        alert("File Telah Di Simpan");
       }catch(err){
         alert(err);
       }
       
    }
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl:any = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onChange = (e:any) => {
        
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        
        setSelectedFile(e.target.files[0]) 
    }

    return(
        <div className="flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col" encType="multipart/form-data">
                <h1 className="text-center my-2 mx-2"><img src={preview} id="gambar"/></h1>
                <label className="hover:bg-green-300 text-center border bg-green-200 rounded inline-block px-2 py-2 my-2 mx-2">
                    <input
                    id="fileOne"
                    className="hidden" 
                    type="file" 
                    {...register("myImage")}
                    onChange={onChange} />
                 Choose Picture Profile
                </label>

                <label className="my-1 mx-2">Name</label>
                <input
                className="border border-gray-400 rounded px-2 py-2 my-1 mx-2"
                type="text"
                {...register("name")}
                />

                <label className="mx-2">Phone</label>
                <input
                className="border border-gray-400 rounded px-2 py-2 my-1 mx-2"
                type="text"
                {...register("phone")}
                />

                <label className="mx-2">Address</label>
                <input
                className="border border-gray-400 rounded px-2 py-2 my-1 mx-2"
                type="text"
                {...register("address")}
                />

                <label className="mx-2">Job</label>
                <input
                className="border border-gray-400 rounded px-2 py-2 my-1 mx-2"
                type="text"
                {...register("job")}
                />

                <label className="mx-2">Company</label>
                <input
                className="border border-gray-400 rounded px-2 py-2 my-1 mx-2"
                type="text"
                {...register("company")}
                />

                <label className="mx-2">email</label>
                <input
                className="border border-gray-400 rounded px-2 py-2 my-1 mx-2"
                type="text"
                {...register("email")}
                />
                
                <button
                className="border bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded my-2 mx-2" 
                type="submit">
                    Add
                </button>
            </form>
        </div>
    );
}