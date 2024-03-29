import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading]= useState(false);

    const onSubmit = useCallback(async()=>{
        try{
        setIsLoading(true);
        registerModal.onClose();
        } catch(error){
        console.log(error);
        }
        finally{
            setIsLoading(false);
        }
        },[registerModal]);

    const onToggle = useCallback(()=>{
        // if(isLoading)return;

        loginModal.onOpen();
        registerModal.onClose();
    },[isLoading, registerModal, loginModal])
        
        const bodyContent = (
            <div className="flex flex-col gap-4" >
                <Input
                placeHolder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
                />
                <Input
                placeHolder="Name"
                onChange={(e)=>setName(e.target.value)}
                value={name}
                disabled={isLoading}
                />
                 <Input
                placeHolder="Username"
                onChange={(e)=>setUsername(e.target.value)}
                value={username}
                disabled={isLoading}
                />
                 <Input
                placeHolder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
                />
            </div>
        )
        const footerContent = (
            <div className="text-neutral-400 text-center mt-4">
                <p>Already have an account?</p>
                <span onClick={onToggle} className="text-white cursor-pointer hover:underline">  Sign in  </span>

            </div>
        )
    return(<Modal
    disabled={isLoading}
    isOpen={registerModal.isOpen}
    title="Create an Account"
    actionLabel="Register"
    onClose={registerModal.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
    footer={footerContent}
    />);
}
export default RegisterModal;