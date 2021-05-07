
import { useForm } from 'react-hook-form';
import { savecontact } from '../../../api/Contact';
import { useDispatch } from 'react-redux';
import FormData from 'form-data';
import fs from 'fs';


export function PhoneAdd(){
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (data:any) => {
       const formData = new FormData();
       let { image } = data;
       formData.append('myImage', image); 
       formData.append('myBuffer', Buffer.alloc(10));
       formData.append('myFile', fs.createReadStream(image));
       dispatch(savecontact(formData));
    }

    const onChange = async (data:any) => {
    
    }

    return(
        <div className="flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
                <h1 className="text-center my-2 mx-2">FOTO Profile</h1>
                <label className="hover:bg-green-300 text-center border bg-green-200 rounded inline-block px-2 py-2 my-2 mx-2">
                    <input
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
                    Upload
                </button>
            </form>
        </div>
    );
}