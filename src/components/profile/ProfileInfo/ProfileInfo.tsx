import styles from './profileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s"
                 alt=""/>
            <div className={styles.descriptionBlock}>
                <img style={{width: '40px'}}
                     src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                     alt=""/>
                description
            </div>
        </div>
    );
};