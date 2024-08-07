import styles from "./header.module.scss";
import { SButton, SFlex } from "react-simple-ui-lib";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { FaCross } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export const Header = () => {
    return (
        <SFlex width={"100%"} justify={"center"} className={styles.header}>
            <SFlex width={"100%"} justify={"space-between"} align={"center"} className={styles.headerInner}>
                <div className="logo">CompanyName</div>
                <SFlex align={"center"} gap={20} className={styles.nav}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Shop</p>
                    <p>FAQ</p>
                </SFlex>
                <SFlex className={styles.action} align={"center"}>
                    <SButton simple icon_right={<MdArrowOutward />}>
                        Login
                    </SButton>
                    <SFlex width={30} height={30} align={"center"} justify={"center"} className={styles.actionIcon}>
                        <CiUser fontSize={20} />
                    </SFlex>
                    <SFlex width={30} height={30} align={"center"} justify={"center"} className={styles.actionIcon}>
                        <CiShoppingCart fontSize={20} />
                    </SFlex>
                </SFlex>
            </SFlex>
        </SFlex>
    );
};
