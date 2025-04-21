"use client";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <div className="max-w-5xl w-full space-y-10 text-center">
        <h1 className="text-4xl font-bold text-pink-500">🚨 Alert Angel Dashboard</h1>
        <p className="text-lg text-gray-300">
          Welcome to <span className="text-white font-semibold">Alert Angel</span> — your all-in-one women’s safety
          platform. Built with love, powered by technology, and inspired by strength. Our goal is to provide women with tools to
          stay safe, informed, and supported wherever they are.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <FeatureCard
            title="📍 Real-Time Location Sharing"
            desc="Share your live GPS location instantly with trusted contacts in case of an emergency or just for peace of mind while commuting or walking alone."
          />
          <FeatureCard
            title="📞 Emergency Quick Connect"
            desc="Trigger an SOS alert with one tap — automatically sending your location and a custom safety message to all your emergency contacts via WhatsApp or call."
          />
          <FeatureCard
            title="🚖 Ride Safety Companion"
            desc="Log and share your ride details like the driver’s name, vehicle number plate, and a live location map. Keep your journey visible to your loved ones."
          />
          <FeatureCard
            title="🧠 Quick Safety Tips"
            desc="Stay informed with bite-sized safety tips, self-defense reminders, and precautionary actions for different situations. Awareness is your first line of defense."
          />
          <FeatureCard
            title="🤝 Community Protection Network"
            desc="We believe in community-driven safety. Alert Angel will soon support local safe zones and verified guardians ready to respond quickly in emergencies."
          />
          <FeatureCard
            title="⚖️ Legal Assistance & Helplines"
            desc="Easily access verified legal aid resources, national helplines, and police station contacts — so you’re never alone when you need help the most."
          />
        </div>

        <div className="mt-12 space-y-4 text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
          <h3 className="text-2xl text-white font-bold">🛡️ Our Mission</h3>
          <p>
            At Alert Angel, we believe every woman deserves to feel safe, confident, and protected. We’re building a platform that
            empowers women through connection, smart alerts, and awareness.
          </p>

          <h3 className="text-2xl text-white font-bold">💬 Why This App Matters</h3>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>One in three women experience harassment or violence in their lifetime.</li>
            <li>Most emergencies happen when help is just out of reach.</li>
            <li>Technology can bridge that gap and bring safety closer, faster.</li>
          </ul>

          <div className="mt-8 p-6 border border-pink-600 rounded-xl bg-pink-950/30 text-pink-300 shadow-lg">
            <p className="italic">
              “Your safety is not optional — it's your right. Alert Angel is here to stand with you, always.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for Feature Card
function FeatureCard({ title, desc }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-lg hover:shadow-pink-500/30 transition">
      <h2 className="text-2xl font-semibold text-pink-400">{title}</h2>
      <p className="text-gray-400 mt-2">{desc}</p>
    </div>
  );
}
