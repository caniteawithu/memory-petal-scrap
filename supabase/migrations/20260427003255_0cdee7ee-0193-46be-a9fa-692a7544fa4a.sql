CREATE TABLE public.guestbook_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  author TEXT NOT NULL,
  content TEXT NOT NULL,
  color_index SMALLINT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.guestbook_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view guestbook messages"
ON public.guestbook_messages
FOR SELECT
USING (true);

CREATE POLICY "Anyone can insert guestbook messages"
ON public.guestbook_messages
FOR INSERT
WITH CHECK (
  length(trim(author)) > 0 AND length(author) <= 20
  AND length(trim(content)) > 0 AND length(content) <= 200
  AND color_index >= 0 AND color_index <= 3
);

CREATE POLICY "Anyone can delete guestbook messages"
ON public.guestbook_messages
FOR DELETE
USING (true);

CREATE INDEX idx_guestbook_messages_created_at ON public.guestbook_messages (created_at DESC);

ALTER PUBLICATION supabase_realtime ADD TABLE public.guestbook_messages;
ALTER TABLE public.guestbook_messages REPLICA IDENTITY FULL;