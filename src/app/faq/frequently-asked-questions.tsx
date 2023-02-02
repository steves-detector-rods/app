import InlineLink from 'app/components/runway/inline-link';
import AccordionItem from './accordion-item';

const frequentlyAskedQuestions = {
	'faq-0': {
		title: <span>What are the advantages of a carbon-fiber shaft/sand scoop handle?</span>,
		content: (
			<span className="flex flex-col space-y-2">
				<p>
					Carbon fiber is a unique material, offering a high &quot;strength to weight&quot; ratio, meaning that it
					offers higher strength, with less weight, than most other materials. Due to this characteristic, and the fact
					that carbon fiber is also a very stiff, waterproof, and low-maintenance material, it makes an ideal material
					for metal detector shafts and sand scoop handles (along with many other unique applications, including
					aerospace/aeronautical uses, bicycle frames, golf club shafts, etc.) In other words, applications where high
					strength and light weight are required, are ideal instances where carbon-fiber can be used effectively.
				</p>
				<p>
					With respect to detector shafts and sand scoop handles in particular, Steve&apos;s carbon-fiber replacement
					shafts offer a number of important benefits. These benefits include:
				</p>
				<ul className="list-disc list-inside">
					<li>
						<b>Light weight</b> - As mentioned, carbon-fiber is a very lightweight material, meaning that a carbon-fiber
						replacement shaft will be lighter than most stock shafts.
					</li>
					<li>
						<b>Strong</b> - Again as mentioned, carbon fiber tubes are quite strong, not prone to breakage when
						high-quality carbon and appropriate wall thicknesses are utilized.
					</li>
					<li>
						<b>Stiff/low flex</b> - With little to no flex in the tubes, carbon-fiber results in a very stiff, stable,
						wobble- and slop-free shaft.
					</li>
					<li>
						<b>Multiple color options</b> - Since the &quot;outer wrap&quot; of carbon-fiber tubes can be done with
						fabric in various colors, carbon-fiber shafts offer the possibility of multiple shaft colors to fit your
						unique style.
					</li>
				</ul>
				<p>
					As a result of these characteristics of carbon fiber, and given that Steve&apos;s shafts include our
					top-notch, heavy-duty clamp-style cam locking system, can be custom-built to your unique/specific needs, and
					can be outfitted with our optional, exclusive counterweight system, we confidently offer top-quality,
					great-looking shafts that provide a more comfortable, sturdy, and &quot;high-end&quot; feel to your detector.
				</p>
			</span>
		),
	},
	'faq-2': {
		title: (
			<span>
				What is the difference between a &quot;standard&quot; shaft and a &quot;counterweight-ready&quot; shaft?
			</span>
		),
		content: (
			<p>
				Here at Steve&apos;s Detector Rods, a <b>standard</b> shaft, is one that is capped at the &quot;arm-cuff
				end&quot; or &quot;butt-end&quot; of the shaft by a simple, snap-in plastic end cap. Meanwhile, a
				<b>counterweight-ready</b> shaft is identical to a standard shaft, <i>except that</i> the counterweight-ready
				model includes the installation of a threaded fitting at the &quot;butt end,&quot; and is then capped by a
				screw-in end cap. This threaded fitting is what enables attachment of the optional counterweight system that is
				offered exclusively by Steve&apos;s Detector Rods.
			</p>
		),
	},
	'faq-3': {
		title: <span>What is a counterweight?</span>,
		content: (
			<p>
				A counterweight is simply weight that is added to an item, to &quot;balance&quot; an otherwise
				&quot;out-of-balance&quot; situation. At Steve&apos;s, a counterweight refers to a carbon-fiber tube, with a
				threaded fitting installed at one end (to screw into and attach to a &quot;counterweight- ready&quot; shaft),
				and a screw-on cap at the other end. This screw-on cap allows access to the inside of the counterweight tube,
				where small, sealed bags of lead shot reside. The counterweights are available in different lengths, that
				therefore are capable of containing differing amounts of weight, which can be tailored to the needs of a given
				user.
			</p>
		),
	},
	'faq-4': {
		title: <span>What is the purpose of counterweighting a shaft?</span>,
		content: (
			<p>
				The purpose of counterweighting is to reduce fatigue and/or discomfort, that is experienced by many users of
				modern metal detectors -- which are in most cases inherently nose-heavy. The nose-heaviness of these units stems
				from the fact that as batteries have gotten smaller, and electronics have become more compact and lightweight,
				the single heaviest component on a metal detector has become the coil. And since this coil sits at the end of a
				long &quot;lever&quot; (your shaft), with virtually no &quot;compensating&quot; weight at the other end (the
				arm-cuff end, or &quot;butt&quot; end of the shaft), modern machines are therefore most often substantially
				nose-heavy -- i.e. imbalanced (from an ergonomics perspective). Counterweighting acts to resolve that imbalance,
				resulting in a more ergonomically correct, and thus comfortable, machine. For additional details, see the next
				question
			</p>
		),
	},
	'faq-5': {
		title: <span>Won&apos;t adding counterweight simply make my machine feel heavier?</span>,
		content: (
			<span className="flex flex-col space-y-2">
				<p>
					While adding weight to a detector will obviously add weight to the unit, the paradoxical answer to this
					question is NO! In most cases, a nose-heavy machine (which most modern machines are) will actually be more
					comfortable to swing with counterweight added, than without! The reason for that, can be explained by
					understanding what I refer to as &quot;absolute&quot; weight, versus &quot;effective&quot; weight.{' '}
					<b>Absolute weight</b> is the overall weight of a machine, as measured by a scale. Obviouly, the
					&quot;absolute weight&quot; of a machine will increase, when you add counterweight. BUT -- as I mentioned
					before, most modern machines are &quot;nose-heavy&quot; (i.e. nearly all of the weight resides at the
					&quot;coil end&quot; of the machine, with almost no weight at the &quot;arm cuff end&quot; or &quot;butt
					end&quot; of the machine). This <b>imbalance</b>, or <b>effective weight</b> as I like to call it, is actually
					what causes the fatigue and discomfort for most detectorists, NOT (in most cases) the &quot;absolute
					weight&quot; of the unit. Of course, keeping a machine as light as possible is an important consideration, but
					NOT at the expense of balance! Let&apos;s illustrate why this is the case.
				</p>
				<p>
					Consider a long board, perhaps 8 feet long, lying on the ground. If someone were to ask you to go and pick up
					that long board, and carry it to them, what would you do? Well, intuitively, you would grab the board{' '}
					<i>near the center</i>, and lift it. <b>Intuitively</b>, you know that to carry the board as effortlessly as
					possible, it must be BALANCED. Now, what happens if you slightly missed the center of the board, when lifting.
					Immediately, the board will tilt in one direction, and so, intuitively again, you would move your hand in
					whatever direction is needed, to achieve &quot;balance.&quot; <b>Once balance is achieved</b>, the board
					becomes relatively easy to carry. Now, imagine that you were required to carry the board, but with your hand
					roughly a foot from the end of the board -- i.e. in an &quot;imbalanced&quot; position. The board&apos;s
					&quot;absolute weight&quot; has not changed AT ALL, and yet the board would be <b>substantially</b> more
					difficult to carry. Reason being, the &quot;effective weight&quot; of the board is greater, when it is
					imbalanced.
				</p>
				<p>
					Basically, the explanation of this situation lies in physics, and concepts of fulcrums and levers and such.
					But, to simplify for those whose interest in science might, let&apos;s just say, &quot;fall short of their
					interest in detecting,&quot; there&apos;s another simple analogy that can be used, and that&apos;s the example
					of the teeter-totter at the old school playground. The teeter-totter is, of course, similar to my example
					above -- simply a board, that rests on a &quot;fulcrum&quot; at the center of the board. While in the above
					example, your hand was the &quot;fulcrum,&quot; in this case the fulcrum is usually a metal bar, positioned at
					the center of the board. In the case of your detector, your HAND, holding the handle, is the fulcrum, and your
					shaft is analogous to the &quot;board.&quot;
				</p>
				<p>
					Now, consider a 50-pound child sitting at one end of the teeter-totter, and no child at the other. Now imagine
					trying to lift the child off the ground, by &quot;pushing down&quot; on the &quot;childless&quot; end of the
					teeter-totter. Difficult, right? Now, imagine that I set a 25-pound bag of sand in the empty seat. While the
					child would still not be lifted off the ground, it would be MUCH easier for you to lift the child off the
					ground, with the assistance of the sand bag, correct? That&apos;s the equivalent of adding counterweight to
					your detector. By adding weight on the opposite end of the shaft from the coil, that weight is assisting you
					in lifting the coil off the ground, and then keeping it floating, over time, as you detect. Next, imagine
					adding another 25-pound bag of sand. At this point, you&apos;ve achieved &quot;perfect balance.&quot; The
					other child is lifted off the ground, and now &quot;floats&quot; in the air. This same effect can be achieved
					by adding enough weight to &quot;perfectly balance&quot; your coil.
				</p>
				<p>
					Hopefully, these analogies and explanations have helped to illustrate that while adding counterweight to a
					shaft DOES, of course, increase the <b>absolute</b> weight of the machine, counterweighting will -- in most
					cases -- make swinging the machine, and keeping the coil floating just off the ground, MUCH more simple, and
					thus comfortable. Because the small muscles in your wrist are primarily responsible for exerting the force
					needed to keep the coil floating, this then manifests as &quot;repetetive stress,&quot; from an
					&quot;ergonomics&quot; perspective. The wrist muscles are insufficient to sustain such coil weight over long
					periods of time, eventually resulting in fatigue -- which then often extends to your elbow, shoulder, etc. And
					so, if you are experiencing such fatigue and/or discomfort, it is very likely that counterweighting the shaft
					would bring substantial, welcome relief; I have hundreds of customers who can attest to the fact that
					counterweighting <b>is</b> -- again, somewhat paradoxically -- the solution. First lightening the machine as
					much as possible, with a carbon-fiber shaft, and then adding a bit of weight <b>in the right location</b>, is
					in my opinion the very best way to achieve a more comfortable, and thus enjoyable, detecting experience.
				</p>
			</span>
		),
	},
	'faq-6': {
		title: <span>How do I know if counterweighting would benefit me?</span>,
		content: (
			<p>
				Essentially, the answer to this question is provided to the customer by the machine itself! In other words, if a
				customer is experiencing fatigue or discomfort after an extended period of swinging their machine, particularly
				in their wrist, and often then into the forearm and the elbow, and sometimes the shoulder and even possibly into
				the back muscles at times, then <b>YES</b>! When this type of fatigue or discomfort is present, then
				counterweighting will <b>almost always</b> make swinging the detector more comfortable.
			</p>
		),
	},
	'faq-7': {
		title: <span>How much counterweight would I need, to make my machine more comfortable to swing?</span>,
		content: (
			<span>
				<p>
					The amount of counterweight that is needed to bring comfort to a given customer, requires consideration of a
					number of variables (some of these variables include the length you extend your shaft to (relative to your
					height), which machine you swing, which coils you use, etc.) However, to simplify this process, I am always
					willing to engage in a &quot;fitting process&quot; with each customer. This allows me to hone in on an
					appropriate amount of counterweighting for each individual, so as to achieve the desired result.
				</p>
				<p className="mt-2">
					The process involves a bit of back-and-forth conversation with the prospective customer, where I ask a number
					of questions. The answers to these questions help me to determine what length of counterweight is needed. As a
					general rule, I like to try and keep the counterweight tube as short as possible, but of course still long
					enough to contain the needed amount of weight. With that said, the amount of weight inside the counterweight
					is adjustable -- just by unscrewing the counterweight&apos;s cap, and adding or removing bags of weight as
					needed. Therefore, a customer can then experiment with different weight combinations, to &quot;zero in&quot;
					on just the right amount of weight for their circumstances (and for the coil in use at the time). So,
					essentially, the &quot;fitting process&quot; I offer prior to ordering is used to determine the necessary
					range of weights that a customer likely will need (so that I can offer the appropriate length of
					counterweight). And then, the customer is able to &quot;fine-tune,&quot; and find <b>exactly</b> the right
					amount of weight that is needed to achieve comfort, through a bit of &quot;trial and error,&quot; using the
					different weight combinations that are available with their specific counterweight tube.
				</p>
			</span>
		),
	},
	'faq-8': {
		title: <span>What colors of shafts and scoop handles do you offer?</span>,
		content: (
			<p>
				That depends upon which machine or scoop handle you are interested in purchasing for. The colors available vary
				from brand to brand, but are usually indicated on the &quot;products&quot; page for that brand. Some brands are
				only offered in black, or in a couple of colors, others are available in a wide assortment of color options. At
				times, I can even produce a shaft in a color that is not generally available, but that depends upon
				circumstances at the time of your order. Please see the &quot;products&quot; pages for the brand you are
				interested in, or feel free to reach out to me via email at{' '}
				<InlineLink href="mailto:steve@stevesdetectorrods.com">steve@stevesdetectorrods.com</InlineLink>, and I&apos;ll
				be happy to chat with you, and send pictures.
			</p>
		),
	},
	'faq-9': {
		title: <span>Can I order a shaft in a color that is not shown on your website?</span>,
		content: (
			<p>
				I always seek to meet customer needs to the best of my ability, and custom colors are no exception. I&apos;ve
				built a number of shafts for customers in colors that I don&apos;t normally offer -- but, it&apos;s not always
				possible. Often, my suppliers will require me to order a specific, minimum number of tubes in a given size and
				color before they will be willing to produce. Therefore, producing one shaft in a specific color is sometimes
				not feasible, if it would require the purchase of multiple additional tubes of those same colors and sizes. At
				other times, the color is simply not available in the market. Still, there are instances when I <i>am</i> able
				to purchase tubes in the desired color, so please reach out to me if you are interested in a specific, custom
				color, and I&apos;ll be happy to see what may be possible.
			</p>
		),
	},
	'faq-10': {
		title: <span>Can you custom-build my shaft specific to my needs?</span>,
		content: (
			<p>
				In short, the answer is YES! I am always willing to work with you on a shaft design that fits any needs you may
				have, that require something other than one of my &quot;standard&quot; shaft options. In most cases, I can come
				up with something that accomplishes whatever needs you may have. Do you need more shaft extension length
				capability, and thus a longer &quot;tall-man&quot; lower rod? No problem! Do you prefer a three-piece
				&quot;travel&quot; type rod, as opposed to the standard two-piece shafts that I generally offer (or a two-piece
				&quot;travel-type&quot; sand scoop handle)? I&apos;m happy to build it! I&apos;ve built custom one-piece
				&quot;dive&quot; shafts; I&apos;ve done &quot;short shafts&quot; for younger/shorter detectorists; I&apos;ve
				designed shafts with different colors for each of the shaft sections (to match the color scheme of a favorite
				sports team, for instance); I&apos;ve even built shafts with sections designed to very specific lengths, so that
				the shaft can be broken down to fit perfectly into a specific model of hard case you may have. Whatever your
				needs, please feel free to reach out to me, as &quot;custom builds&quot; are something I enjoy; I always seek to
				please my customers, and what better way than a truly custom shaft build, that fits your specific needs?
			</p>
		),
	},
	'faq-11': {
		title: (
			<span>
				Can you build shafts (or sand scoop handles) for detectors (or sand scoops) that are not listed on your webpage?
			</span>
		),
		content: (
			<span>
				<p>
					I always do my best to respond to any customer requests. Often, I can work up a design for as shaft or scoop
					handle to fit a machine or scoop that I don&apos;t typically build a shaft for -- WITH THE CAVEAT that I
					generally don&apos;t build shafts for detectors that require &quot;non-round&quot; tubes. Reason being, shafts
					with &quot;non-round&quot; tubes are much more difficult/expensive to build, as non-round carbon-fiber tubes
					require expensive molds for production (unlike round tubes, which are produced via a simpler
					&quot;roll-wrapping&quot; process that is more &quot;universal,&quot; and offered by all carbon tube
					manufacturers, and thus at more competitive prices).
				</p>
				<p className="mt-2">
					Otherwise, assuming round tubes can be used, I can often (though not always) come up with a nice design, to
					meet your needs. At times, it may require you to mail the detector to me, so that I can take accurate
					measurements, etc. But often, if you are willing to engage in some detailed back-and-forth conversation, and
					if you have access to, and can read, a digital caliper, then I can often work with you by email or -- if
					necessary, by phone -- to ascertain the necessary measurements and information to design a shaft for your
					needs. There is generally a 6 to 8 week lead time required, to work up the design, order the parts and then
					have them produced and shipped to me, but I&apos;m always happy to work with you to see &quot;what is
					possible!&quot;
				</p>
			</span>
		),
	},
	'faq-12': {
		title: <span>How long does it take for you to build and then ship my item?</span>,
		content: (
			<span>
				<p>
					In general, I try to keep several of my standard shaft and scoop-handle options pre-built, and thus ready to
					ship. When I do not have the shaft you are interested in pre-built (which of course will be the case with any
					custom-built shaft), and assuming I have the necessary parts in stock, I generally require 3 to 5 days after
					payment, to allow time for the shaft to be built, for the epoxy to fully cure, and then to package the shaft
					and prepare a shipping label.
				</p>
				<p className="mt-2">
					For custom builds which I do not have parts in stock for, longer wait times are required (generally 4 to 8
					weeks) so that parts can be ordered, produced, and then shipped to me. In these cases, I try to offer accurate
					time estimates, but patience is appreciated as the acquisition of parts has become more difficult due to
					ongoing supply-chain issues. You can check in with me at any time for a &quot;progress update,&quot; and I try
					to provide timely updates whenever I receive new information.
				</p>
			</span>
		),
	},
	'faq-13': {
		title: <span>How do I place an order?</span>,
		content: (
			<p>
				For most of the items offered on my website, ordering begins via email. Since so much of what I do involves at
				least some &quot;customization,&quot; I like to confirm that I know just what is needed, prior to the ordering
				process. So, when you are ready to place an order, simply email me at{' '}
				<InlineLink href="mailto:steve@stevesdetectorrods.com">steve@stevesdetectorrods.com</InlineLink>. Once
				we&apos;ve worked out the details, I&apos;ll email you a full price quote. Should you then decide to purchase,
				we can discuss the various payment options that are available (see question 14, below). Most of my customers
				prefer to pay with either credit or debit card, or with PayPal. For these customers, I email (via my PayPal
				account) a link to an itemized invoice; this invoice then allows payment with either credit or debit card, or
				via PayPal, simply by clicking the &quot;Pay&quot; button on the invoice. If the aforementioned payment options
				are not convenient, I also offer payment via Venmo and Google Pay, and can also accept postal money orders if
				you prefer not to pay electronically.
			</p>
		),
	},
	'faq-14': {
		title: <span>What forms of payment do you accept?</span>,
		content: (
			<p>
				Most of my customers prefer to pay using PayPal, or via debit or credit card, and these are very convenient
				forms of payment for me as well. If you prefer other options, I can also accept Venmo, and Google Pay, or I can
				accept postal money orders as well.
			</p>
		),
	},
	'faq-15': {
		title: <span>Can I purchase directly from your website?</span>,
		content: (
			<p>
				Since so much of the shaft-building work that I do involves a &quot;custom&quot; element -- whether it be a true
				&quot;custom-shaft build,&quot; or just determining the optimal amount of counterweighting you may need -- I
				usually like to speak with my customers prior to ordering, to be sure that I have all the details correct.
				Therefore, I don&apos;t offer &quot;direct purchase&quot; for most items, at this time. I do offer my
				&quot;CarbonPro&quot; line of shafts for direct &quot;buy-it-now&quot; purchase, and will expand this option to
				other non-customizable items, in the future.
			</p>
		),
	},
	'faq-16': {
		title: <span>How do I track my order, once it is shipped?</span>,
		content: (
			<p>
				Once your item is shipped, and the package receives its first tracking scan, you will receive an email from my
				ShipStation account, that will contain your tracking information.
			</p>
		),
	},
	'faq-17': {
		title: <span>What shipping methods do you offer?</span>,
		content: (
			<p>
				Most of my larger items that are shipped within the lower 48 states, are shipped via UPS Ground, with smaller
				items shipped either via USPS Priority Mail, or USPS First Class. The shipping charges I offer in my price
				quotes reflect these shipping carriers/methods. However, I am always willing to use any method of shipment that
				a customer may prefer, if the higher shipping costs are not a concern. FedEx Ground is usually more expensive
				than UPS, as is USPS for most items due to the assessment of surcharges imposed by USPS for longer items ($4
				surcharge for packages over 22&quot;, and $15 surcharge for packages over 30&quot;). The exception to this is
				when shipping to Alaska or Hawaii, or military/APO addresses, in which case I ship USPS Priority Mail. While
				these destinations still incur the USPS &quot;large package&quot; surcharges, the USPS rates generally still end
				up less expensive than UPS or FedEx rates. If you need your items more quickly, 2nd-Day air, or overnight
				shipping options are also available, and I can offer shipping quotes to help determine the best balance of cost
				vs. shipping time. For my international customers, I generally ship UPS Worldwide Expedited, but -- again --
				other options are available upon request.
			</p>
		),
	},
	'faq-18': {
		title: <span>Do you sell/ship internationally?</span>,
		content: (
			<p>
				Yes, absolutely! I am always happy to serve overseas customers. The only considerations are that international
				shipping rates can be rather costly (I&apos;m always happy to provide shipping quotes), and the VAT/import
				duties assessed by many countries can at times be rather expensive also (and I&apos;m unable to advise of these
				charges, since each country is different; if you are unfamiliar with these charges, please contact the
				appropriate agency in your country, to estimate these charges). Despite the added costs, I have many customers
				from all over the world and am always happy to serve!
			</p>
		),
	},
	'faq-19': {
		title: <span>What is your warranty/return policy?</span>,
		content: (
			<span>
				<p>
					When purchasing from Steve&apos;s Detector Rods, you can be confident that you will receive the very highest
					level of customer service -- from your first contact with me, all the way through the purchase process, AND
					BEYOND. I am fully committed to 100% customer satisfaction, and for me, that&apos;s not a cliche, it&apos;s
					simply the way I do business. Honesty, integrity, offering superior-quality products, and a commitment to
					serving customers to the best of my ability; these qualities serve as the foundation of my company. If for any
					reason you are not satisfied with your purchase, please contact me, and you can be assured that I will work
					with you to achieve an appropriate solution to the issue at hand -- a solution that will ensure your complete
					satisfaction, and exceed your expectations.
				</p>
				<p className="mt-2">
					In general, each item I sell carries a full two-year warranty against any defects in materials or
					manufacturing. Simply notify me of the issue, return the item, and I will offer either a brand-new
					replacement, or a full refund of the purchase price of the item (depending upon which resolution the customer
					prefers). However, I will also work to resolve any issues that may arise -- in a fair and reasonable manner --
					<i>even if</i> unrelated to manufacturing defects, or falling outside of the warranty period. Again, my goal
					is 100% customer satisfaction, and I am confident that you will experience that, as one of my customers.
				</p>
			</span>
		),
	},
	'faq-20': {
		title: <span>How do I contact you for more information?</span>,
		content: (
			<p>
				The easiest way to contact me is via email; my email address is{' '}
				<InlineLink href="mailto:steve@stevesdetectorrods.com">steve@stevesdetectorrods.com</InlineLink>. You can also
				send me a message on my{' '}
				<InlineLink href="https://www.facebook.com/stevesdetectorrods/" target="_blank" rel="noreferrer">
					Facebook business page
				</InlineLink>
				.
			</p>
		),
	},
} as const;

export default function FrequentlyAskedQuestionsAccordion() {
	return (
		<div className="flex flex-col mt-4 space-y-2">
			{Object.entries(frequentlyAskedQuestions).map(([key, faq]) => (
				<AccordionItem key={key} title={faq.title} content={faq.content} />
			))}
		</div>
	);
}
