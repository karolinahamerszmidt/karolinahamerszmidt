/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { FC } from 'react';
import React, { useCallback, useContext } from 'react';

import { Locale, LocaleContext } from '../locale-provider/locale-provider';

import { ReactComponent as EnIcon } from './en-icon.svg';
import { ReactComponent as PlIcon } from './pl-icon.svg';
import './language-switcher.scss';

export const LanguageSwitcher: FC = () => {
  const { setLocale } = useContext(LocaleContext);

  const handleEnIconClick = useCallback(() => {
    setLocale(Locale.EN);
  }, [setLocale]);
  const handlePlIconClick = useCallback(() => {
    setLocale(Locale.PL);
  }, [setLocale]);

  return (
    <div className="LanguageSwitcher">
      <div className="LanguageSwitcher__icon" onClick={handleEnIconClick} role="button" title="EN">
        <EnIcon />
      </div>
      <div className="LanguageSwitcher__icon" onClick={handlePlIconClick} role="button" title="PL">
        <PlIcon />
      </div>
    </div>
  );
};
