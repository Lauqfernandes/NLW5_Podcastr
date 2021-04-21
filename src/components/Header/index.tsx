import styles from  './styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export function Header(){

    const CurrentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    });

    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="logo"/>
            <p>O melhor para você ouvir sempre</p>
            <span>{CurrentDate}</span>
        </header>
    );
}