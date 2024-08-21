import { useForm } from "../hooks/useForm"

export const FormsApp = () => {

    const initialForm = {
        username:'',
        Nickname:'',
        email:'',
        password:''
    }
    
    const {formState, onInputChange} = useForm(initialForm)

    const {username, nickname, email, password} = formState

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="userName" className="form-label">username</label>
            <input 
                type="text" 
                className="form-control" 
                id="username"
                name = 'username'
                value = {username}
                onChange = {onInputChange}

            />
        
        </div>

        <div className="mb-3">
            <label htmlFor="nickName" className="form-label">Nickname</label>
            <input 
                type="text" 
                className="form-control" 
                id="nickname"
                name = 'nickname'
                value = {nickname}
                onChange = {onInputChange}

            />
        
        </div>
        
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
                type="email" 
                className="form-control" 
                id="email"
                name = 'email'
                value = {email}
                onChange = {onInputChange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
                type="password" 
                className="form-control" 
                id="password"
                name = 'password'
                value = {password}
                onChange = {onInputChange}
            />
        </div>
    <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}
