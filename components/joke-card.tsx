import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield } from "lucide-react";
import StarRating from "./star-rating";
import { RatedJoke } from "@/lib/utils";

interface JokeResponse {
  error: boolean;
  category: string;
  type: string;
  setup?: string;
  delivery?: string;
  joke?: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
}

interface JokeCardProps {
  joke: JokeResponse;
  onRate?: (rating: number) => void;
  currentRating?: number;
}

export default function JokeCard() {
  // TODO: Get the dispatch function using useDispatch<AppDispatch>()
  // const dispatch = ...

  const handleRate = (rating: number) => {
    // TODO: Dispatch rateJoke with the rating
    // dispatch(rateJoke({ joke, rating }))
  };

  // TODO: Get the joke from Redux state using useSelector
  // this is a placeholder for the joke
  const joke: RatedJoke = {
    rating: 0,
    error: false,
    category: "",
    type: "",
    id: 0,
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    safe: false,
    lang: "",
  };

  const getActiveFlags = () => {
    return Object.entries(joke?.flags || {})
      .filter(([_, value]) => value)
      .map(([key, _]) => key);
  };

  const activeFlags = getActiveFlags();

  return (
    <Card className="shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="capitalize">{joke.category}</span>
            <Badge variant="outline" className="text-xs">
              ID: {joke.id}
            </Badge>
          </CardTitle>
          <div className="flex items-center gap-2">
            {joke.safe ? (
              <Badge variant="secondary" className="text-xs">
                <Shield className="w-3 h-3 mr-1" />
                Safe
              </Badge>
            ) : (
              <Badge variant="destructive" className="text-xs">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Not Safe
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Joke Content */}
        <div className="bg-gray-50 rounded-lg p-4">
          {joke.type === "twopart" ? (
            <div className="space-y-3">
              <p className="text-gray-800 font-medium">{joke.setup}</p>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-700 italic">{joke.delivery}</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-800">{joke.joke}</p>
          )}
        </div>

        {/* Star Rating */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">
              Rate this joke:
            </p>
            <StarRating rating={joke.rating || 0} onRate={handleRate} />
          </div>
          {joke.rating && (
            <Badge variant="secondary" className="text-xs">
              You rated: {joke.rating}/5
            </Badge>
          )}
        </div>

        {/* Flags */}
        {activeFlags.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600">Content Flags:</p>
            <div className="flex flex-wrap gap-1">
              {activeFlags.map((flag) => (
                <Badge
                  key={flag}
                  variant="outline"
                  className="text-xs capitalize"
                >
                  {flag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Metadata */}
        <div className="flex justify-between text-xs text-gray-500 pt-2 border-t">
          <span>Type: {joke.type}</span>
          <span>Language: {joke.lang.toUpperCase()}</span>
        </div>
      </CardContent>
    </Card>
  );
}
