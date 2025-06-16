import Navbar from "../component/Navbar";

export default function page() {
  return (
    <div className="heroimge bg-[#040818]  text-white   ">
      <div className="coins-gradient">
        <Navbar />
      </div>
      <div className="  p-22 ">
        <h1 className="text-4xl font-bold mb-4">
          Vybex – Child Safety & Protection Policy{" "}
        </h1>
        <p className="text-lg font-bold mb-8">Last Updated: April 14, 2025 </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">
          Our Commitment to Child Safety
        </h2>
        <p className="mb-4">
          At Vybex, we take child safety and online protection seriously. We are
          committed to ensuring a safe and secure environment for all users and
          strictly enforce policies to prevent Child Sexual Abuse and
          Exploitation (CSAE).
        </p>
        <h2 className="text-2xl font-bold mt-4 mb-2">Age Restrictions</h2>

        <p className="mt-4">
          Vybex is intended for users of all ages, including children under 13.
        </p>

        <p className="mt-4">
          We do not knowingly allow minors to use our platform without parental
          knowledge or supervision.
        </p>

        <p className="mt-4">
          If we discover that a minor has registered and is being exposed to
          harmful or inappropriate content, we reserve the right to remove the
          account or limit its access immediately.
        </p>
        <h2 className="text-2xl font-bold mt-4 mb-2">
          Content Moderation & Reporting
        </h2>

        <p className="mt-4">
          We have strict guidelines and enforcement mechanisms to prevent
          harmful content on Vybex:
        </p>

        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>
            <span className="font-semibold">Prohibited Content:</span> Any
            content involving child exploitation, nudity, or abuse is strictly
            forbidden and will be removed immediately and reported to relevant
            law enforcement or child protection agencies.
          </li>
          <li>
            <span className="font-semibold">User Reporting System:</span> All
            users can report any suspicious, harmful, or unsafe activity or
            content. Every report is reviewed promptly, and appropriate action
            is taken, including banning accounts and notifying authorities when
            necessary.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-4 mb-2">User Safety Measures</h2>

        <p className="mt-4">
          To safeguard all users, including minors, we have implemented the
          following protocols:
        </p>

        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li>
            <span className="font-semibold">Profile Verification:</span> We take
            steps to discourage fake accounts and impersonation through
            registration validation.
          </li>
          <li>
            <span className="font-semibold">Chat & Interaction Controls:</span>{" "}
            Users can block, mute, or report others if they feel unsafe or
            threatened in any way.
          </li>
          <li>
            <span className="font-semibold">Live Stream Monitoring:</span> Our
            team monitors live sessions using a mix of automated alerts and user
            feedback to prevent misuse of the feature.
          </li>
          <li>
            <span className="font-semibold">Data Protection & Privacy:</span>{" "}
            Vybex does not sell or share personal data with third parties unless
            required by law or consented by the user. Our practices are aligned
            with COPPA and GDPR standards.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mt-4 mb-2">
          Compliance & Law Enforcement Collaboration
        </h2>

        <p className="mt-4">
          Vybex complies with child protection laws and platform policies
          including:
        </p>

        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>COPPA (Children’s Online Privacy Protection Act)</li>
          <li>GDPR (General Data Protection Regulation)</li>
          <li>Google Play & Apple App Store CSAE policies</li>
        </ul>

        <p className="mt-4">
          Any violations involving child abuse or exploitation are immediately
          reported to law enforcement agencies and child protection
          organizations.
        </p>
        <h2 className="text-2xl font-bold mt-4 mb-2">
          Contact for Child Safety Concerns
        </h2>

        <p className="mt-4">
          If you have concerns or inquiries regarding child safety on Vybex,
          please contact our team at:
        </p>

        <a href="mailto:info@vybexapp.com" className="mt-4 font-semibold">📩 info@vybexapp.com</a>

        <p className="mt-4">
          We are committed to maintaining a secure and positive environment for
          all users and are continuously working to improve our child safety
          policies and tools.
        </p>
      </div>
    </div>
  );
}
