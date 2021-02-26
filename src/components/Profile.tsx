import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const {level} = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer} >
      <img src="https://github.com/beasousa2.png" alt="Imagem do Perfil" />
      <div>
        <strong>Beatriz Sousa</strong>
        <p>
          <img src="icons/level.svg" alt="Level up" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
