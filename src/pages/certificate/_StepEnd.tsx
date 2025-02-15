import React, {useContext, useMemo} from "react";
import {get} from "lodash-es";
import {CourseIdAndNameMap, CourseIdAndSuffixLinkMap} from "@site/src/constants/course";
import {CertificateContext} from "@site/src/contexts/CertificateContext";
import {OS_LINK} from "@site/src/constants/nft";
import {EyeIcon, TwitterIcon} from "lucide-react";
import {buttonVariants} from "@site/src/components/ui/Button";
import {cn} from "@site/src/utils/class-utils";

const StepEnd = (props) => {
    const {txInfo} = props;
    const {info} = useContext(CertificateContext);

    const donationAmount = Number(get(txInfo, 'amount')) || Number(get(info, 'data.donationAmount', 0));
    const title = get(info, 'course_info.course_title');
    const courseId = get(info, 'courseId');

    const twLink = useMemo(() => {
        const text = `I completed the ${CourseIdAndNameMap[courseId]} course at WTF Academy and claimed an on-chain certificate (SBT)! @WTFAcademy_

Join us at https://wtf.academy/${CourseIdAndSuffixLinkMap[courseId]}`;

        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    }, [courseId, title]);

    return (
        <div className="flex flex-col">
            <p className="text-xl font-medium">
               🎉 恭喜你在{title}课程中毕业。
            </p>
            {
                !!donationAmount && (
                    <p className="mt-3 mb-2 text-base">
                        感谢您为WTF团队捐赠的<span className="mx-3 font-bold text-primary">{donationAmount}</span>ETH！
                    </p>
                )
            }
            <p className="text-base font-medium my-4">
                <a className="inline-flex text-primary cursor-pointer no-underline items-center" target="_blank"
                   href={OS_LINK}>
                    <EyeIcon className="mr-2 w-5 h-5"/>
                    查看你的NFT
                </a>
            </p>
            <a target="_blank" href={twLink} className={cn(buttonVariants(), "w-3/4 text-base font-medium h-12 !text-white")}>
                <span>点击分享至Twitter</span>
                <TwitterIcon className="w-5 h-5 ml-2"/>
            </a>
        </div>
    )
}

export default StepEnd;
