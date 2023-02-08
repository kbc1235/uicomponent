import styles from '../style/style.module.css'
const Profile = ({name,profileImg }) => {
    return(
        <div className={styles.profile_wrap}>
            <div className={styles.profile_img}>
                <img src='' alt="" />
            </div>
            <div className={styles.profile_info}>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Profile;