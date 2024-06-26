import React from "react";
import "@/app/globals.css"

const Offices = () =>{
    const backgroundImageUrl = 'https://res.cloudinary.com/dtcz2zuev/image/upload/v1707893084/alghawalimanpower/qubkrpihvvdey8uznlpm.jpg';
    return(
        <>
            <div className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ backgroundImage: `url(${backgroundImageUrl})`}}>
                <section className="container">
                    <div className="w-full md:text-center mb-4 md:mb-8 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">Our Offices</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="flex flex-col gap-4">
                            <div className="text-base md:text-2xl text-[#262F32] font-bold">ISB Office</div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-1">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.9994 16.9201V19.9201C22.0006 20.1986 21.9435 20.4743 21.832 20.7294C21.7204 20.9846 21.5567 21.2137 21.3515 21.402C21.1463 21.5902 20.904 21.7336 20.6402 21.8228C20.3764 21.912 20.0968 21.9452 19.8194 21.9201C16.7423 21.5857 13.7864 20.5342 11.1894 18.8501C8.77327 17.3148 6.72478 15.2663 5.18945 12.8501C3.49942 10.2413 2.44769 7.27109 2.11944 4.1801C2.09446 3.90356 2.12732 3.62486 2.21595 3.36172C2.30457 3.09859 2.44702 2.85679 2.63421 2.65172C2.82141 2.44665 3.04925 2.28281 3.30324 2.17062C3.55722 2.05843 3.83179 2.00036 4.10945 2.0001H7.10945C7.59475 1.99532 8.06524 2.16718 8.43321 2.48363C8.80118 2.80008 9.04152 3.23954 9.10944 3.7201C9.23607 4.68016 9.47089 5.62282 9.80945 6.5301C9.94399 6.88802 9.97311 7.27701 9.89335 7.65098C9.8136 8.02494 9.62831 8.36821 9.35944 8.6401L8.08945 9.9101C9.513 12.4136 11.5859 14.4865 14.0894 15.9101L15.3594 14.6401C15.6313 14.3712 15.9746 14.1859 16.3486 14.1062C16.7225 14.0264 17.1115 14.0556 17.4694 14.1901C18.3767 14.5286 19.3194 14.7635 20.2794 14.8901C20.7652 14.9586 21.2088 15.2033 21.526 15.5776C21.8431 15.9519 22.0116 16.4297 21.9994 16.9201Z" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </span>
                                    <span dir="ltr" className="text-sm md:text-base text-[#434146]">+92 31615 11673</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 6L12 13L2 6" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </span>
                                    <span className="text-sm md:text-base text-[#434146]">info@edubrains.com</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </span>
                                    <span className="text-sm md:text-base text-[#434146]">Shop Number 2795W, near the Social Security Office.</span>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.75001 1.75H6.00001H11H11.25V2V7V7.25H11H10H9.75001V7V4.31055L6.90879 7.15178L6.90834 7.15223C6.69899 7.36052 6.53301 7.60826 6.42001 7.88111C6.30701 8.15396 6.24923 8.44651 6.25001 8.74184L6.25001 8.7425L6.25001 14V14.25H6.00001H5.00001H4.75001V14V8.74335V8.743H5.00001C4.99872 8.28317 5.08865 7.82766 5.26459 7.40282C5.44053 6.97799 5.69899 6.59227 6.02501 6.268L5.75001 1.75ZM5.75001 1.75V2V3V3.25H6.00001H8.68946L5.84871 6.09075C5.84863 6.09083 5.84854 6.09092 5.84845 6.09101L5.75001 1.75ZM6.00001 8.7425V13.75V14V8.7425ZM6.00001 8.7425C5.99914 8.41413 6.06339 8.08884 6.18903 7.78545C6.31468 7.48207 6.49923 7.20661 6.73201 6.975L6.00001 8.7425Z" fill="#434146" stroke="#434146" strokeWidth="0.5"/>
                                    </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-base md:text-2xl text-[#262F32] font-bold">ISB Office</div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-1">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.9994 16.9201V19.9201C22.0006 20.1986 21.9435 20.4743 21.832 20.7294C21.7204 20.9846 21.5567 21.2137 21.3515 21.402C21.1463 21.5902 20.904 21.7336 20.6402 21.8228C20.3764 21.912 20.0968 21.9452 19.8194 21.9201C16.7423 21.5857 13.7864 20.5342 11.1894 18.8501C8.77327 17.3148 6.72478 15.2663 5.18945 12.8501C3.49942 10.2413 2.44769 7.27109 2.11944 4.1801C2.09446 3.90356 2.12732 3.62486 2.21595 3.36172C2.30457 3.09859 2.44702 2.85679 2.63421 2.65172C2.82141 2.44665 3.04925 2.28281 3.30324 2.17062C3.55722 2.05843 3.83179 2.00036 4.10945 2.0001H7.10945C7.59475 1.99532 8.06524 2.16718 8.43321 2.48363C8.80118 2.80008 9.04152 3.23954 9.10944 3.7201C9.23607 4.68016 9.47089 5.62282 9.80945 6.5301C9.94399 6.88802 9.97311 7.27701 9.89335 7.65098C9.8136 8.02494 9.62831 8.36821 9.35944 8.6401L8.08945 9.9101C9.513 12.4136 11.5859 14.4865 14.0894 15.9101L15.3594 14.6401C15.6313 14.3712 15.9746 14.1859 16.3486 14.1062C16.7225 14.0264 17.1115 14.0556 17.4694 14.1901C18.3767 14.5286 19.3194 14.7635 20.2794 14.8901C20.7652 14.9586 21.2088 15.2033 21.526 15.5776C21.8431 15.9519 22.0116 16.4297 21.9994 16.9201Z" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </span>
                                    <span dir="ltr" className="text-sm md:text-base text-[#434146]">+92 111 7716</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 6L12 13L2 6" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </span>
                                    <span className="text-sm md:text-base text-[#434146]">info@edubrains.com</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </span>
                                    <span className="text-sm md:text-base text-[#434146]">Shop Number 2795W, near the Social Security Office.</span>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.75001 1.75H6.00001H11H11.25V2V7V7.25H11H10H9.75001V7V4.31055L6.90879 7.15178L6.90834 7.15223C6.69899 7.36052 6.53301 7.60826 6.42001 7.88111C6.30701 8.15396 6.24923 8.44651 6.25001 8.74184L6.25001 8.7425L6.25001 14V14.25H6.00001H5.00001H4.75001V14V8.74335V8.743H5.00001C4.99872 8.28317 5.08865 7.82766 5.26459 7.40282C5.44053 6.97799 5.69899 6.59227 6.02501 6.268L5.75001 1.75ZM5.75001 1.75V2V3V3.25H6.00001H8.68946L5.84871 6.09075C5.84863 6.09083 5.84854 6.09092 5.84845 6.09101L5.75001 1.75ZM6.00001 8.7425V13.75V14V8.7425ZM6.00001 8.7425C5.99914 8.41413 6.06339 8.08884 6.18903 7.78545C6.31468 7.48207 6.49923 7.20661 6.73201 6.975L6.00001 8.7425Z" fill="#434146" stroke="#434146" strokeWidth="0.5"/>
                                    </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-base md:text-2xl text-[#262F32] font-bold">ISB Office</div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-1">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.9994 16.9201V19.9201C22.0006 20.1986 21.9435 20.4743 21.832 20.7294C21.7204 20.9846 21.5567 21.2137 21.3515 21.402C21.1463 21.5902 20.904 21.7336 20.6402 21.8228C20.3764 21.912 20.0968 21.9452 19.8194 21.9201C16.7423 21.5857 13.7864 20.5342 11.1894 18.8501C8.77327 17.3148 6.72478 15.2663 5.18945 12.8501C3.49942 10.2413 2.44769 7.27109 2.11944 4.1801C2.09446 3.90356 2.12732 3.62486 2.21595 3.36172C2.30457 3.09859 2.44702 2.85679 2.63421 2.65172C2.82141 2.44665 3.04925 2.28281 3.30324 2.17062C3.55722 2.05843 3.83179 2.00036 4.10945 2.0001H7.10945C7.59475 1.99532 8.06524 2.16718 8.43321 2.48363C8.80118 2.80008 9.04152 3.23954 9.10944 3.7201C9.23607 4.68016 9.47089 5.62282 9.80945 6.5301C9.94399 6.88802 9.97311 7.27701 9.89335 7.65098C9.8136 8.02494 9.62831 8.36821 9.35944 8.6401L8.08945 9.9101C9.513 12.4136 11.5859 14.4865 14.0894 15.9101L15.3594 14.6401C15.6313 14.3712 15.9746 14.1859 16.3486 14.1062C16.7225 14.0264 17.1115 14.0556 17.4694 14.1901C18.3767 14.5286 19.3194 14.7635 20.2794 14.8901C20.7652 14.9586 21.2088 15.2033 21.526 15.5776C21.8431 15.9519 22.0116 16.4297 21.9994 16.9201Z" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </span>
                                    <span dir="ltr" className="text-sm md:text-base text-[#434146]">+92 111 7716</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 6L12 13L2 6" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </span>
                                    <span className="text-sm md:text-base text-[#434146]">info@edubrains.com</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </span>
                                    <span className="text-sm md:text-base text-[#434146]">Shop Number 2795W, near the Social Security Office.</span>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.75001 1.75H6.00001H11H11.25V2V7V7.25H11H10H9.75001V7V4.31055L6.90879 7.15178L6.90834 7.15223C6.69899 7.36052 6.53301 7.60826 6.42001 7.88111C6.30701 8.15396 6.24923 8.44651 6.25001 8.74184L6.25001 8.7425L6.25001 14V14.25H6.00001H5.00001H4.75001V14V8.74335V8.743H5.00001C4.99872 8.28317 5.08865 7.82766 5.26459 7.40282C5.44053 6.97799 5.69899 6.59227 6.02501 6.268L5.75001 1.75ZM5.75001 1.75V2V3V3.25H6.00001H8.68946L5.84871 6.09075C5.84863 6.09083 5.84854 6.09092 5.84845 6.09101L5.75001 1.75ZM6.00001 8.7425V13.75V14V8.7425ZM6.00001 8.7425C5.99914 8.41413 6.06339 8.08884 6.18903 7.78545C6.31468 7.48207 6.49923 7.20661 6.73201 6.975L6.00001 8.7425Z" fill="#434146" stroke="#434146" strokeWidth="0.5"/>
                                    </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Offices;