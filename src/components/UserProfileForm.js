import { useForm } from "react-hook-form";
import {getInputValidations} from "../helpers/validations";

const UserProfileForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Profile form:</h1>
            <label>
             First name:{" "}
             <input 
                type="text" 
                placeholder="First name..." 
                {...register("firstName", getInputValidations("firstName"))}
             />
             {errors.firstName && (<p className="error">{errors.firstName.message}</p>)} 
            </label>
            <label>
             Last name:{" "}
             <input 
                type="text" 
                placeholder="Last name..." 
                {...register("lastName", getInputValidations("lastName"))}
             />
             {errors.lastName && (<p className="error">{errors.lastName.message}</p>)} 
            </label>
            <label>
             Country:{" "}
             <select {...register("country", {required: "The field is required! Choose a country!"})}>
                <option value=""></option>
                <option value="ua">Ukraine</option>
                <option value="usa">USA</option>
                <option value="pl">Poland</option>
             </select>
             {errors.country && (<p className="error">{errors.country.message}</p>)} 
            </label>
            <div>
                 <button type="submit">Save</button>
                 <button type="reset">Reset</button>
            </div>
        </form>
    )
};

export default UserProfileForm;