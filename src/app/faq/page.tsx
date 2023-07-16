import { Metadata } from 'next';
import InlineLink from 'src/app/components/runway/inline-link';
import PageHeader from 'src/app/components/runway/page-header';
import FrequentlyAskedQuestionsAccordion from './frequently-asked-questions';
import { MainSectionWrapper } from '../components/runway/section-wrapper';

export default function Faq() {
	return (
		<MainSectionWrapper className="mb-4">
			<PageHeader>FAQ</PageHeader>
			<div className="text-gray-500 text-lg">
				<p>
					You&apos;ve got questions, We&apos;ve got answers! Below is a collection of our most commonly asked questions
				</p>
				<p>
					Don&apos;t see what you&apos;re looking for? No problem! Just shoot me an email at{' '}
					<InlineLink href="mailto:steve@stevesdetectorrods.com">steve@stevesdetectorrods.com</InlineLink>
				</p>
			</div>
			<FrequentlyAskedQuestionsAccordion />
			<p className="text-center text-gray-700 text-xl mt-6">
				Don&apos;t see what you&apos;re looking for? No problem! Just shoot me an email at{' '}
				<InlineLink href="mailto:steve@stevesdetectorrods.com">steve@stevesdetectorrods.com</InlineLink>
			</p>
		</MainSectionWrapper>
	);
}

export const metadata: Metadata = {
	title: "Steve's Detector Rods | FAQ",
	description: 'Questions? We have answers',
};
