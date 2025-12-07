import React from 'react'
import Logo from '../../components/Logo/Logo'
import VoiceRecorder from '../../components/VoiceRecorder/VoiceRecorder'
import './Notes.scss'

const Notes: React.FC = () => {
  return (
    <div className="notes-page">
      <div className="notes-container">
        <div className="notes-sidebar">
          <Logo />
          <div className="notes-info">
            <h3>Функции:</h3>
            <ul>
              <li>Голосовой ввод</li>
              <li>Текстовый редактор</li>
              <li>Экспорт в DOCX/TXT</li>
              <li>Копирование в буфер</li>
            </ul>
          </div>
        </div>
        
        <div className="notes-content">
          <VoiceRecorder />
        </div>
      </div>
    </div>
  )
}

export default Notes
