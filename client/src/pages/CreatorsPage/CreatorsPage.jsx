import React from 'react';
import styles from './CreatorsPage.module.scss';
import LinkedinIcon from '../../components/svg/socialMediaIcons/LinkedinIcon/LinkedinGreenIcon/LinkedinIcon';
import BehanceIcon from '../../components/svg/socialMediaIcons/BehanceIcon/BehanceIcon';
import GithubIcon from '../../components/svg/socialMediaIcons/GithubIcon/GithubIcon';
import TelegramIcon from '../../components/svg/socialMediaIcons/TelegramIcon/TelegramIcon';

const CreatorsPage = () => {
  const data = [
    {
      department: 'project manager',
      members: {
        polina: {
          name: 'Polina Zhyhailo',
          email: 'polinazhyhailo@gmail.com',
          social: {
            linkedIn: 'https://linkedin.com/in/polina-zhyhailo',
            telegram: 'https://t.me/polina_zhy',
            behance: '',
            gitHub: '',
          },
        },
      },
    },
    {
      department: 'design',
      members: {
        yana: {
          name: 'Yana Moseiko',
          email: 'yana.dorokhina@gmail.com',
          social: {
            linkedIn: 'https://www.linkedin.com/in/yana-moseiko/',
            telegram: 'https://t.me/kvitkapaporotii',
            behance: 'https://www.behance.net/yanamoseiko',
          },
        },
        mariya: {
          name: 'Mariia Parshykova',
          email: 'parsh.mariia@gmail.com',
          social: {
            linkedIn: 'https://www.linkedin.com/in/mariiaparshykova/',
            telegram: 'https://t.me/Neytasa',
            behance: 'https://www.behance.net/d9b29191',
          },
        },
        victoria: {
          name: 'Viktoriia Rolia',
          email: '',
          social: {
            linkedIn: 'https://www.linkedin.com/in/viktoriia-r-090211207/',
            telegram: 'https://t.me/Neytasa',
            behance: 'https://www.behance.net/viktoriiarolia',
          },
        },
      },
    },
    {
      department: 'QA',
      members: {
        ruslan: {
          name: 'Ruslan Likhina',
          email: 'sportman21061988@gmail.com',
          social: {
            linkedIn: 'https://www.linkedin.com/in/ruslan-likhina-589b5927a/',
            telegram: 'https://t.me/Ruslan_Likhina',
          },
        },
        bohdan: {
          name: 'Bohdan Koshkarov',
          email: 'bogdankharkov483@gmail.com',
          social: {
            linkedIn: 'https://www.linkedin.com/in/bohdan-koshkarov-21150413a/',
            telegram: 'https://t.me/FF_Bogdan',
            gitHub: 'https://github.com/BogdanKoshkarov',
          },
        },
        viorika: {
          name: 'Viorika Kalpakchy',
          email: 'kalpakchy@gmail.com',
          social: {
            // eslint-disable-next-line max-len
            linkedIn:
              'https://www.linkedin.com/in/viorika-kalpakchy-29926b289?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bl8Z3O37GRx2LrcqbwhCNlQ%3D%3D',
            telegram: 'https://t.me/Viori',
          },
        },
      },
    },
    {
      department: 'front-end development',
      members: {
        rostyslav: {
          name: 'Rostyslav Lisovyi',
          email: 'lisovyi.rostyslav@gmail.com',
          social: {
            linkedIn: 'https://linkedin.com/in/roslisoviy',
            telegram: 'https://t.me/lisovvi_rostvslav',
            behance: '',
            gitHub: 'https://github.com/rokokos97',
          },
        },
        vitalii: {
          name: 'Vitalii Mamchur',
          email: 'mamchur243@gmail.com',
          social: {
            linkedIn: 'https://linkedin.com/in/vitalii-mamchur-ua',
            telegram: 'https://t.me/mou5ville',
            behance: '',
            gitHub: 'https://github.com/Vitalii-Mamchur',
          },
        },
      },
    },
    {
      department: 'back-end development',
      members: {
        rostyslav: {
          name: 'Rostyslav Lisovyi',
          email: 'lisovyi.rostyslav@gmail.com',
          social: {
            linkedIn: 'https://linkedin.com/in/roslisoviy',
            telegram: 'https://t.me/lisovvi_rostvslav',
            behance: '',
            gitHub: 'https://github.com/rokokos97',
          },
        },
      },
    },
  ];
  return (
    <div className={styles.creatorsPage} data-testid="CreatorsPage">
      <p className={styles.creatorsPage__navigationBlock}>
        <span>Home</span>
        <span> / </span>
        <span>Creators</span>
      </p>
      <p className={styles.creatorsPage__title}>Contact us</p>
      <div className={styles.creatorsPage__text}>
        <p>We are always open to communication and welcome any questions or suggestions!</p>
        <p>
          Our project is the result of the diligent and creative work of a team of enthusiasts who
          strive to implement innovative
        </p>
        <p>ideas and introduce cutting-edge technologies.</p>
      </div>
      <div className={styles.creatorsPage__text}>
        <p>
          If you have questions, ideas for collaboration, or just want to learn more about our
          project, please don&apos;t hesitate to
        </p>
        <p>contact us. We are always ready for new challenges and interesting projects!</p>
      </div>
      <p className={styles.creatorsPage__title2}>project team</p>
      <div className={styles.creatorsPage__membersBlock}>
        {data.map((col, index) => (
          <div key={index} className={styles.creatorsPage__column}>
            <p className={styles.creatorsPage__department}>{col.department}</p>
            {Object.values(col.members).map((member, index) => (
              <div key={index} className={styles.creatorsPage__member}>
                <p className={styles.creatorsPage__name}>{member.name}</p>
                <p
                  className={styles.creatorsPage__mail}
                  style={{ display: `${!member.email && 'none'}` }}
                >
                  {member.email}
                </p>
                <div className={styles.creatorsPage__social}>
                  {member.social.linkedIn && (
                    <a target="_blank" href={member.social.linkedIn} rel="noreferrer">
                      <LinkedinIcon />
                    </a>
                  )}
                  {member.social.telegram && (
                    <a target="_blank" href={member.social.telegram} rel="noreferrer">
                      <TelegramIcon />
                    </a>
                  )}
                  {member.social.behance && (
                    <a target="_blank" href={member.social.behance} rel="noreferrer">
                      <BehanceIcon />
                    </a>
                  )}
                  {member.social.gitHub && (
                    <a target="_blank" href={member.social.gitHub} rel="noreferrer">
                      <GithubIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorsPage;
