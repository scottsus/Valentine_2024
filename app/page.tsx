'use client';

import { useState } from 'react';
import styles from './page.module.css';

type YesButtonProps = {
  fontSize: string;
};

export default function Home() {
  const [saidYes, setSaidYes] = useState(false);

  const [yesButtonSize, setYesButtonSize] = useState<YesButtonProps>({
    fontSize: '20px',
  });
  const updateYesButtonSize = (yesButtonSize: YesButtonProps) => {
    const fontSizeNumber = parseInt(yesButtonSize.fontSize);
    const newFontSize = `${fontSizeNumber + 10}px`;

    return { fontSize: newFontSize };
  };
  const handleYesClick = () => {
    setSaidYes(true);
  };

  const [noMessageIndex, setNoMessageIndex] = useState(0);
  const noButtonMessages = [
    'No',
    'Wait what',
    'Why not',
    'Are you sure',
    "I don't want the best bf in the world",
    "If u don't say yes I'm gonna start showing embarassing pics of u 🤭",
    'MY TEST SUBJECT!!! U want another one?',
    'How do u like the choke',
    'Hehe I love eggs',
    'Why so hangry',
    'Sassy 👱‍♀️',
    'Ok no more joking',
    'Ok fr now',
    'Oi stop',
    'Press yes gdi',
    'Excuse me what',
    'JUST PRESS YES',
    'Dont be mean ☹️',
    "I'm sad now ☹️☹️",
    'Babe why',
    'U leave me no choice',
  ];
  const handleNoClick = () => {
    setNoMessageIndex((noMessageIndex) => noMessageIndex + 1);
    setYesButtonSize((yesButtonSize) => updateYesButtonSize(yesButtonSize));
  };

  return (
    <main className={styles.main}>
      {saidYes ? (
        <>
          <h1 className={styles.heading}>YEAAAAAAAAAAHHHHHH!!! 💃</h1>
          <img
            src="gifs/celebrate.gif"
            className={`${styles.gif} ${styles.celebrate}`}
          />
          <p className={styles.subtitle}>🧺 excited for our date today!!!</p>
        </>
      ) : (
        <>
          {noMessageIndex > 5 && (
            <div className={styles.embarassingPicturesContainer}>
              {noMessageIndex > 5 && (
                <img
                  src="embarassing/lab.jpeg"
                  className={`${styles.embarassingPictures}`}
                />
              )}
              {noMessageIndex > 6 && (
                <img
                  src="embarassing/choke.jpeg"
                  className={`${styles.embarassingPictures}`}
                />
              )}
              {noMessageIndex > 7 && (
                <img
                  src="embarassing/egg.jpeg"
                  className={`${styles.embarassingPictures}`}
                />
              )}
              {noMessageIndex > 8 && (
                <img
                  src="embarassing/hangry.jpeg"
                  className={`${styles.embarassingPictures}`}
                />
              )}
              {noMessageIndex > 9 && (
                <img
                  src="embarassing/moody.jpeg"
                  className={`${styles.embarassingPictures}`}
                />
              )}
            </div>
          )}
          <h1 className={styles.heading}>
            now that midterms are over... will you be my valentine 🤭
          </h1>
          <img src="gifs/ask.gif" className={`${styles.gif} ${styles.ask}`} />
          <div className={styles.buttonContainer}>
            <button
              onClick={handleYesClick}
              className={`${styles.button} ${styles.yes}`}
              style={yesButtonSize}
            >
              Yes
            </button>
            {noMessageIndex < noButtonMessages.length && (
              <button
                onClick={handleNoClick}
                className={`${styles.button} ${styles.no}`}
              >
                {noButtonMessages[noMessageIndex]}
              </button>
            )}
          </div>
        </>
      )}
    </main>
  );
}
