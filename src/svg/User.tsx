import React from 'react';
import { IconIProps, IconWrapper } from 'sezy-design/components/icon';

export const User = (props: IconIProps) => {
    return IconWrapper(undefined, props,
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.58867 0 0 3.58867 0 8C0 12.4113 3.58867 16 8 16C12.4113 16 16 12.4113 16 8C16 3.58867 12.4113 0 8 0ZM5.33333 6.66667C5.33333 5.194 6.56267 4 8 4C9.43733 4 10.6667 5.194 10.6667 6.66667V7.33333C10.6667 8.806 9.43733 10 8 10C6.56267 10 5.33333 8.806 5.33333 7.33333V6.66667ZM8 14.6667C6.378 14.6667 4.89 14.0827 3.73267 13.116C4.292 12.0607 5.38867 11.3333 6.66667 11.3333H9.33333C10.6113 11.3333 11.708 12.0607 12.2673 13.116C11.11 14.0827 9.622 14.6667 8 14.6667Z" fill="#2A333D" />
        </svg>
    )
}
export default User