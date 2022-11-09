import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Pixels Photography `
    }, [title])
};

export default useTitle;

