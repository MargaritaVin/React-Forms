import { useForm } from "react-hook-form";

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
                {...register("firstname", {
                    required: "First name is required field!",
                    minLength: {
                        value: 3, 
                        message: "Min length of first name is 3"
                    }
                })}
             />
             {errors.firstname && (<p className="error">{errors.firstname.message}</p>)} 
            </label>
            <label>
             Last name:{" "}
             <input 
                type="text" 
                placeholder="Last name..." 
                {...register("lastname", {
                    required: "Last name is required field!",
                    minLength: {
                        value: 3, 
                        message: "Min length of last name is 3"
                    }
                })}
             />
             {errors.lastname && (<p className="error">{errors.lastname.message}</p>)} 
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