import Image from 'next/image';
import headerImg from '../../public/images/header.png';

export const Header = () => {
    return (
        <div className="w-full">
            <Image
                className="w-full h-full "
                src={headerImg}
                alt="Header"
                layout="intrinsic" 
                
            />
        </div>

    );
};
