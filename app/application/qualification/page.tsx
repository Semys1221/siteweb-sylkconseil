"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { QualificationForm } from "@/components/funnel-flow/qualification-form";

function QualificationContent() {
  const searchParams = useSearchParams();
  const [eventUri, setEventUri] = useState<string | null>(null);
  const [inviteeUri, setInviteeUri] = useState<string | null>(null);

  useEffect(() => {
    const calendlyEventUrl = searchParams.get("calendly_event_url");
    const inviteeUuid = searchParams.get("invitee_uuid");
    if (calendlyEventUrl) {
      setEventUri(calendlyEventUrl);
      if (inviteeUuid) {
        setInviteeUri(`${calendlyEventUrl}/invitees/${inviteeUuid}`);
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <img
            src="https://grzs6rqzvzupoxv9.public.blob.vercel-storage.com/stephane/croped%20circle-stepahen.png"
            alt="SYLK Conseils"
            className="w-14 h-14 rounded-full"
          />
        </div>
        <QualificationForm />
      </div>
    </div>
  );
}

export default function QualificationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center"><div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" /></div>}>
      <QualificationContent />
    </Suspense>
  );
}
