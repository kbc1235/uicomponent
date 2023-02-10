import styles from '../style/style.module.css'
const Profile = ({name,profileImg }) => {
    return(
        <div className={styles.profile_wrap}>
            <div className={styles.profile_img}>
                <img src='https://raw.githubusercontent.com/kbc1235/sideproject/main/KakaoTalk_20230210_155847025.png' alt="" />
            </div>
            <div className={styles.profile_info}>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Profile;