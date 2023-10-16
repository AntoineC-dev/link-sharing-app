import styles from './Title.module.css';

interface TitleProps {
  text: string;
  textProps?: React.HTMLProps<HTMLParagraphElement>;
  title: string;
  titleProps?: React.HTMLProps<HTMLHeadingElement>;
}

function Title({ text, textProps, title, titleProps }: TitleProps) {
  return (
    <div className={styles.container}>
      <h1 {...titleProps}>{title}</h1>
      <p {...textProps}>{text}</p>
    </div>
  );
}

export default Title;
