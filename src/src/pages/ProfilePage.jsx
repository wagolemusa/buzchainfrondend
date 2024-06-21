import React, { useState } from 'react'
import Header from '../../componets/Layout/Headers';
import styles from '../../styles/styles';
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import ProfileContent from "../components/Profile/ProfileContent"
const ProfilePage = () => {
    const [active, setActive] = useState(1);

    return(
        <>
            <Header />
            <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
                <div className='w-[335px]'>
                    <ProfileSidebar active={active} setActive={setActive} />
                </div>
                <ProfileContent active={active}/>
            </div>
        </>
    )
}

export default ProfilePage;