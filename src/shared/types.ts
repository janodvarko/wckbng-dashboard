export type UserReport = {
  uuid: string;
  reported_at: Date;
  url: string;
  breakage_category?: string;
  comments: string;
  details: Record<string, any>;
  related_bugs: RelatedBug[];
  labels: string[];
};

export type RelatedBug = {
  number: number;
  title: string;
};

export type UrlPattern = {
  bug: number;
  title: string;
  url_pattern: string;
};
