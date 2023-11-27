import React, { useEffect, useRef, useState } from 'react';
import FooterBar from "../footer/FooterBar";
import HeaderBar from '../header/HeaderBar';

interface MemberLayoutProps {
    children?: React.ReactNode;
}

const MemberLayout: React.FC<MemberLayoutProps> = ({ children }) => {

    const [headerHeight, setHeaderHeight] = useState<any>(0);
    const [footerHeight, setFooterHeight] = useState<any>(0);

    const headerRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    const handleResize = () => {
        setHeaderHeight(headerRef?.current?.clientHeight);
        setFooterHeight(footerRef?.current?.clientHeight);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    }, [headerHeight, footerHeight]);

    const totalHeight: any = headerHeight + footerHeight;
    const customHeight = `calc(100vh - ${totalHeight.toString()}px)`;
    // let navBodyHeight = window.innerHeight;
    // navBodyHeight = navBodyHeight - totalHeight;
    let minBodyHeight = 750 || customHeight;

    return (
        <section>
            <div className="header-section" ref={headerRef}>
                <HeaderBar />
            </div>

            {/* <div style={{ minHeight: navBodyHeight }}> */}
            <div className="background-wrapper" style={{ minHeight: minBodyHeight }}>
                {children}
            </div>
            {/* </div> */}

            <div className="footer" ref={footerRef}>
                <FooterBar />
            </div>
        </section>
    );
}
export default MemberLayout; 