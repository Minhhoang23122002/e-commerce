import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: #333;
    color: #fff;
    padding: 10px 0;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const FooterSection = styled.div`
    flex: 1;
    padding: 0 20px;
    box-sizing: border-box;
`;

const SectionTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 10px;
`;

const SectionLink = styled.a`
    text-decoration: none;
    color: #fff;
    display: block;
    margin-bottom: 8px;
`;

const SocialLink = styled.a`
    display: inline-block;
    margin-right: 15px;
    color: #fff;
    font-size: 20px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <SectionTitle>About Us</SectionTitle>
                    <p>Your Electronics Store is dedicated to providing high-quality electronic products and excellent customer service.</p>
                </FooterSection>

                <FooterSection>
                    <SectionTitle>Quick Links</SectionTitle>
                    <SectionLink href="#">Home</SectionLink>
                    <SectionLink href="#">Shop</SectionLink>
                    <SectionLink href="#">Contact Us</SectionLink>
                    <SectionLink href="#">FAQs</SectionLink>
                </FooterSection>

                <FooterSection>
                    <SectionTitle>Contact Information</SectionTitle>
                    <p>123 Ngô Quyền, Đà Nẵng</p>
                    <p>Email: hoanghsope@example.com</p>
                    <p>Phone: 0914162323</p>
                </FooterSection>

                <FooterSection>
                    <SectionTitle>Follow Us</SectionTitle>
                    <div>
                        <SocialLink href="#" target="_blank">Facebook</SocialLink>
                        <SocialLink href="#" target="_blank">Twitter</SocialLink>
                        <SocialLink href="#" target="_blank">Instagram</SocialLink>
                    </div>
                </FooterSection>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
