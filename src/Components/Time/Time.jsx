import sty from './Time.module.css'

export default function Time({ dia, hora, minuto, segundo }) {
    return (
        <div className={sty.timerContainer}>
          <div className={sty.timerSegment}>
            <span className={sty.timeLabel}>Days</span>
            <span className={sty.timeValue}>{dia}</span>
          </div>
          <div className={sty.timerSeparator}>:</div>
          <div className={sty.timerSegment}>
            <span className={sty.timeLabel}>Hours</span>
            <span className={sty.timeValue}>{hora}</span>
          </div>
          <div className={sty.timerSeparator}>:</div>
          <div className={sty.timerSegment}>
            <span className={sty.timeLabel}>Minutes</span>
            <span className={sty.timeValue}>{minuto}</span>
          </div>
          <div className={sty.timerSeparator}>:</div>
          <div className={sty.timerSegment}>
            <span className={sty.timeLabel}>Seconds</span>
            <span className={sty.timeValue}>{segundo}</span>
          </div>
        </div>
      )
}
